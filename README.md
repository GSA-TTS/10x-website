# 10x Website

WIP - porting site from React to 11ty

---

## Development 

### Installation & getting started
This site can be run locally using NodeJS. Using the command line, install the site and dependencies:

``` npm i```

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

## Federalist/Cloud Pages notes

Because these sites build in a directory, not the root level of a domain, we have to do a few extra thing to make sure the links and assets work.

### HTML / liquid / layouts / components

In templates and layouts, make sure to use the liquid `| url` filter, which will automatically prefix the `baseurl` environment variable during production builds:

```html
<a href="{{ item.link | url }}">
  <img src="{{ '/assets/theme/images/gsa-logo.svg' | url }}"/>
</a>
```

### Markdown and YAML
In markdown, make sure to not link to a root-relative page, but rather use relative links:

```md
View our [projects](../projects)
```


For now, the places where we iterate over links provided in YAML lists are automatically prepended with the baseurl by the templates that use them. So this is ok:
```yaml
- button_text: "click here"
  button_link: "/projects"

reportUrl: "/assets/report.pdf"

```
Note that you do not use the `../` when defining permalinks for pages in YAML either.

### Styles and assets

In CSS/Sass, use relative asset paths in path variables and `url()` for images and fonts:

```scss

$theme-font-path: "theme/fonts"

.bg {
  background-image: url("theme/images/10x-logo.png");
}
```

### How to access Cloud Pages build for all branches in the 10x Website

Below is the cloud.gov link to the build for the `main` branch:

`https://federalist-37831b52-7633-429a-9a79-14298034dd54.sites.pages.cloud.gov/preview/gsa-tts/10x-website/`

To view the build for any `10x Website` branch that has been committed to Github,  copy the link above and append it with your branch name. Example:

`https://federalist-37831b52-7633-429a-9a79-14298034dd54.sites.pages.cloud.gov/preview/gsa-tts/10x-website/post-launch-bug-fixes/`