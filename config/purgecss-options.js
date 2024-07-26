const purgeCSSOptions = {
    css: ["./_site/assets/styles/*.css"],
    content: [
        "./_site/**/*.{html,js,svg}",
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: [
        "abbr[title]",
        "kbd",
        "samp",
        "sub",
        "optgroup",
        "[type=reset]",
        "[type=reset]::-moz-focus-inner",
        "[type=reset]:-moz-focusring",
        "fieldset",
        "[type=radio]",
        "summary",
        "[contentEditable=true]:focus",
        "cite",
        "dfn",
        "pre",
        ".usa-in-page-nav__nav"
    ]
};

module.exports = purgeCSSOptions;