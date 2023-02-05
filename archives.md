---
layout: default
title: Blog
noindex: yes
---
# Blog posts


{% for post in site.posts %}
* {: .preview} **[{{ post.title }}]({{ post.url }})**{: .title}
  *{{ post.date  | date: "%Y %B %-d"}}*{: .date}
  <span>{% for tag in post.tags %}<span class='tag {{tag}}'>{{tag}}</span>{% endfor %}</span>{: .tags}
  <span>{{ post.excerpt | strip_html | truncatewords: 20 }}</span>{: .excerpt}
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