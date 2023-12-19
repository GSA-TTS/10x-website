---
title: Author archive
layout: layouts/author-page.html
pagination:
  data: collections.authors
  size: 1
  alias: author
permalink: "authors/{{ author | slug }}/"
renderData:
  author: "{{ author }}"
  title: "Posts by {{ author }}"
  description: "An archive of all posts by the author: {{ author }}."
---