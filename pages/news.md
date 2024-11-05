---
title: News and Announcements
description: 10x in the news -- stories of innovation, experiments, and what we've learned as we work toward delivering good-for-people digital solutions. 
hero_banner:
  category: "News"
  title: "10x announcements, media coverage and project highlights"
  subtitle: "Stories of innovation, experiments, and what we've learned as we work toward delivering good-for-people digital solutions"
layout: layouts/news-landing.html
permalink: "/news{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber }}{% endif %}/index.html"
eleventyNavigation:
  parent: root
  key: News
  order: 2
theme: 8
pagination:
  data: collections.news
  size: 7
  alias: posts
return-to-top_text: "Return to top"
read-more-button_text: "Read more"
tags-list:
  - Announcements
  - In-the-news
  - Projects
renderData:
  title: News and Updates
  description: "All news and updates."
redirect_from: 
  - /news-updates/
  - /posts/scaling-10x/
  - /posts/2023-submission-period/
---
