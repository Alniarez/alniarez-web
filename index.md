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

{% for post in site.posts limit:3 %}
* {: .preview} *{{ post.date  | date: "%Y %B %-d"}}*{: .date} **[{{ post.title }}]({{ post.url }})** 
  {% for tag in post.tags %}<span class='tag {{tag}}'>{{tag}}</span> {% endfor %}  
  {{ post.excerpt | strip_html | truncatewords: 20 }}
{% endfor %}{: .title-posts}

<script defer>
document.body.onmousemove = e => {
  for(const preview of document.getElementsByClassName('preview')) {
    const rect = preview.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top

    preview.style.setProperty('--mouse-x', `${x}px`)
    preview.style.setProperty('--mouse-y', `${y}px`)
  }
}
</script>