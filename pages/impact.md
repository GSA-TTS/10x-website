---
title: 10x Impact Reports
description: Find out about the impact of 10x projects and products, and how investment dollars have supported the work of improving government digital services. 
hero_banner:
  category: "Impact Reports"
  title: "Our impact"
  subtitle: "A yearly review of 10x investments in improving government digital services"
layout: layouts/impact-list-page.html
mainNavPageTitle: Impact Reports
className: impact-landing2
return-to-top_text: Return to top
order: 3
permalink: /impact{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber }}{% endif %}/index.html
redirect_from: 
  - /reports/
eleventyNavigation:
  parent: root
  key: Impact
  order: 3
pagination:
  data: collections.reports
  size: 7
  alias: reports
---