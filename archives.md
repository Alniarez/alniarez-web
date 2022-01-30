---
layout: default
title: Blog
noindex: yes
---
# Blog posts

{% for post in site.posts %}
* *{{ post.date  | date: "%Y %B %-d"}}* - **[{{ post.title }}]({{ post.url }})**
{% endfor %}
