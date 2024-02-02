---
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - nav
    - post
    - posts
permalink: /tags/{{ tag }}/
layout: layouts/tags.html
renderData:
  title: "Tagged “{{ tag }}”"
  description: "All projects tagged with “{{ tag }}”"
---
