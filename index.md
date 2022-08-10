---
layout: default
title: Home - Alniarez
description: Hello, I'm Jorge Sierra, aka Alniarez. This is my personal website showcasing my games, software projects and other random shenanigans.
og: yes
---
# Alniarez
{: .font-title}

I am Jorge Sierra Miranda. Welcome to my ~~personal website~~ lair. Here you can find all the stuff that comes out of my spare time: software, games, photography and other shenanigans.
{: .font-sub-title}

{% for post in site.posts limit:2 %}

*{{ post.date  | date: "%Y %B %-d"}}*{: .date} **[{{ post.title }}]({{ post.url }})**  {% for tag in post.tags %}<span class='tag {{tag}}'>{{tag}}</span> {% endfor %}

{{ post.content | strip_html | truncatewords: 50 }}

{% endfor %}

