---
layout: layouts/news-updates.html
permalink: "/news{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber }}{% endif %}/index.html"
eleventyNavigation:
  parent: root
  key: News
  order: 2
theme: 8
renderData:
  title: Latest News
  description: "All news and updates.”"
---
