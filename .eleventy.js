const { DateTime } = require("luxon");
const fs = require('fs');

const UglifyJS = require("uglify-js");
const htmlmin = require("html-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const svgSprite = require("eleventy-plugin-svg-sprite");
const { imageShortcode, imageWithClassShortcode } = require('./config');
const { JSDOM } = require('jsdom');
const pluginTOC = require('eleventy-plugin-toc');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require("markdown-it-attrs");

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
  eleventyConfig.addCollection("news", collection => {
    return collection.getFilteredByGlob("news/*.md").sort(function (a, b) {
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
  eleventyConfig.addCollection("investments", collection => {
    return collection.getFilteredByGlob("investments/*.md").sort(function (a, b) {
      return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
    });
  });

  // add projects to a named collection
  eleventyConfig.addCollection("about", collection => {
    return collection.getFilteredByGlob("about/*.md").sort(function (a, b) {
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
  // eleventyConfig.addPassthroughCopy({ "_includes/theme/fonts": "assets/theme/fonts" });
  eleventyConfig.addPassthroughCopy({ "_includes/theme/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "reports/pdfs": "reports" });
  eleventyConfig.addPassthroughCopy({ "node_modules/@uswds/uswds/img": "assets/uswds/img" });


  // eleventyConfig.addPassthroughCopy({ "_includes/theme/uswds-2.10.1-dist/js": "assets/theme/uswds/js" });


  // Copy USWDS init JS so we can load it in HEAD to prevent banner flashing
  eleventyConfig.addPassthroughCopy({
    "node_modules/@uswds/uswds/dist/js/uswds-init.js":
      "assets/uswds/js/uswds-init.js",
  });


  // SVG Sprite Plugin for USWDS USWDS icons
  eleventyConfig.addPlugin(svgSprite, {
    path: "./node_modules/@uswds/uswds/dist/img/uswds-icons",
    svgSpriteShortcode: "uswds_icons_sprite",
    svgShortcode: "uswds_icons",
  });

  // SVG Sprite Plugin for USWDS USA icons
  eleventyConfig.addPlugin(svgSprite, {
    path: "./node_modules/@uswds/uswds/dist/img/usa-icons",
    svgSpriteShortcode: "usa_icons_sprite",
    svgShortcode: "usa_icons",
  });

  //Eleventy Table of Content Plugin
  eleventyConfig.addPlugin(pluginTOC);

  // Set image shortcodes
  eleventyConfig.addLiquidShortcode('image', imageShortcode);
  eleventyConfig.addLiquidShortcode('image_with_class', imageWithClassShortcode);
  eleventyConfig.addLiquidShortcode("uswds_icon", function (name) {
    return `
    <svg class="usa-icon" aria-hidden="true" role="img">
      <use xlink:href="#svg-${name}"></use>
    </svg>`;
  });

  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('_site/404/index.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  //Filter that Extracts Headings
  eleventyConfig.addNunjucksFilter("getHeadings", (content) => {
    let headings = [];
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const headingElements = [...document.querySelectorAll('h3')]; // Adjust this selector based on your needs
  
    headingElements.forEach(heading => {
      const id = heading.id || heading.textContent.trim().toLowerCase().replace(/\s+/g, '-');
      headings.push({ id: id, text: heading.textContent });
    });
  
    return headings;
  });

  /* Markdown Plugins */
  // let markdownIt = require("markdown-it");
  // let markdownItAnchor = require("markdown-it-anchor");

  let markdownItOptions = {
    breaks: true,
    linkify: true,
    html: true
  };
  let markdownItAnchorOptions = {
    permalink: false,
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
