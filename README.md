# 10x Website

## Development

### Installation & getting started

This site can be run locally using NodeJS. Using the command line, install the site and dependencies:

```npm i```

To serve the site locally:

```npm run start```

After serving the site locally, to build all css assets, open a new terminal tab, then run the following:

```npm run assets:build```

To watch for css changes:

```npm run assets:watch```

To refresh the site locally, which includes rebuilding the _site folder and all css assets, run the following:

```npm run assets:refresh```

To build for production:

```npm run build```

## cloud.gov Pages

We use [cloud.gov Pages](https://pages.cloud.gov) (aka cgPages) to build on every commit to GitHub. If you do not have access to the 10x site in cgPages, ask an admin of the 10x organization in cgPages to invite you. While you can work on a cgPages site without this provided you have the correct org/team/repo permissions, the visibility into the build process is extremely helpful.

### cgPages notes

Because these sites build in a subdirectory, not the root level of a domain, we have to do a few extra thing to make sure the links and assets work on previews.

#### HTML / liquid / layouts / components

In templates and layouts, make sure to use the liquid `| url` filter, which will automatically prefix the `baseurl` environment variable during production builds:

```html
<a href="{{ item.link | url }}">
  <img src="{{ '/assets/theme/images/gsa-logo.svg' | url }}"/>
</a>
```

#### Markdown and YAML

There are some key differences between Markdown and YAML particularly when linking to a page or resource.

In markdown, make sure to use relative links. Do not link to the page directly off the root (`/page`). An example of relative linking style:

```md
View our [projects](../projects)
```

The places where we iterate over links provided in YAML lists (e.g., frontmatter) are automatically prepended with the baseurl by the templates that use them. Do not use relative links (`../`) when defining YAML permalinks. Instead, link off the root:

```yaml
- button_text: "click here"
  button_link: "/projects"

reportUrl: "/assets/report.pdf"

```

#### Styles and assets

In CSS/Sass, use relative asset paths in path variables and `url()` for images and fonts:

```scss

$theme-font-path: "theme/fonts"

.bg {
  background-image: url("theme/images/10x-logo.png");
}
```

### Accessing builds for all branches in the 10x Website

Below is the cgPages base url for our branches:

`https://federalist-37831b52-7633-429a-9a79-14298034dd54.sites.pages.cloud.gov/preview/gsa-tts/10x-website/`

To view the build for any `10x Website` branch that has been committed to Github, either use the `Preview` link from the cgPages build console directly, or copy the link above and append it with your branch name. 

Example:

`https://federalist-37831b52-7633-429a-9a79-14298034dd54.sites.pages.cloud.gov/preview/gsa-tts/10x-website/post-launch-bug-fixes/`