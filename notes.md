---
layout: default
title: Notes
noindex: yes
---

Me, screaming into the void.

---

{% for note in site.data.notes %}
{{ note.note }}{% if note.image %} <a target="_blank" rel="noopener noreferrer" href="/assets/images/notes/{{ note.image }}">🖼️</a>{: .icon}{% endif %}  
*{{ note.date | date: "%c" }}*
{: .note}
{% endfor %}
