---
title: News and Announcements | 10x News
description: 10x in the news, blogs, and announcements--find out what we're working on.
pageBrow: News
pageTitle: 10x program announcements, media coverage and project highlights
subtitle: Read up on 10x news and announcements, highlights from 10x projects, and what the media is saying about the 10x program.
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
  - In-the-News
  - Projects
renderData:
  title: News and Updates
  description: "All news and updates.”"
---
