const { DateTime } = require("luxon");
const UglifyJS = require("uglify-js");
const htmlmin = require("html-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {

  // add yaml support for _data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Merge data instead of overriding
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // add blog posts to a named collection
  eleventyConfig.addCollection("posts", collection => {
    return collection.getFilteredByGlob("posts/*.md").sort(function (a, b) {
      return b.date - a.date; // sort by date, newest first
    });
  });
  // add report interior pages ("sections") to a collection for later pagination & display
  eleventyConfig.addCollection("reportSections", collection => {
    return collection.getFilteredByGlob("reports/**/*.md").filter(function (item) {
      // all sections have permalinks turned off
      return item.data.permalink === false;
    })
  });
  // add top-level pdf and web reports to a named collection
  eleventyConfig.addCollection("reports", collection => {
    return collection.getFilteredByGlob("reports/*.md").sort(function (a, b) {
      return b.data.year - a.data.year; // sort by year, descending
    });
  });

  // add projects to a named collection
  eleventyConfig.addCollection("projects", collection => {
    return collection.getFilteredByGlob("projects/*.md").sort(function (a, b) {
      return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
    });
  });

  // note that both of these expect dates to be written in YYYY-MM-DD format assuming east coast time, without a full ISO string or "Z" timezone offset, for easier post date editing in yaml.
  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'America/New_York' }).setZone('utc').toFormat("LLLL d, yyyy");
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'America/New_York' }).setZone('utc').toFormat("yyyy-MM-dd");
  });

  eleventyConfig.addFilter('markdownify', (str) => {
    return markdownItRenderer.render(str);
  });

  // Minify inline (not imported) JS
  eleventyConfig.addFilter("jsmin", function (code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPassthroughCopy({ "_includes/theme/fonts": "assets/theme/fonts" });
  eleventyConfig.addPassthroughCopy({ "_includes/theme/images": "assets/theme/images" });
  // eleventyConfig.addPassthroughCopy({"_includes/theme/uswds-2.10.1-dist/img": "assets/theme/uswds/img"});
  eleventyConfig.addPassthroughCopy({ "_includes/theme/uswds-2.10.1-dist/js": "assets/theme/uswds/js" });

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let markdownItAttrs = require("markdown-it-attrs");
  let markdownItOptions = {
    breaks: true,
    linkify: true,
    html: true
  };
  let markdownItAnchorOptions = {
    permalink: false
  };
  let markdownItRenderer = new markdownIt(markdownItOptions);

  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions)
    .use(markdownItAnchor, markdownItAnchorOptions)
    .use(markdownItAttrs)
  );

  // for federalist builds to work
  let baseurl = "/";
  if (process.env.BASEURL) {
    baseurl = process.env.BASEURL;
  }
  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: baseurl,

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
