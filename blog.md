---
layout: default
title: Blog
noindex: yes
---
# Blog posts

{% for post in site.posts %}
* [{{ post.title }}]({{ post.url }})
  - {{ post.date  | date: "%Y %B %-d"}}
  - {{ post.excerpt | strip | truncatewords: 24 }}
  - {% for tag in post.tags %}<span class='tag {{tag}}'>{{tag}}</span> {% endfor %}
{% endfor %}