---
layout: default
title: Blog
noindex: yes
---
# Blog posts

{% for post in site.posts %}
* **[{{ post.title }}]({{ post.url }})** *{{ post.date  | date: "%Y %B %-d"}}*{: .date}
{% endfor %}


