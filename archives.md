---
layout: default
title: Blog
noindex: yes
---
# Blog posts

{% for post in site.posts %}
* *{{ post.date  | date: "%Y %B %-d"}}*{: .date} **[{{ post.title }}]({{ post.url }})**  {% for tag in post.tags %}<span class='tag {{tag}}'>{{tag}}</span> {% endfor %}
{% endfor %}


