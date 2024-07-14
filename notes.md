---
layout: default
title: Notes
noindex: yes
---

Me, screaming into the void.

{% for note in site.data.notes %}
{{ note.note }}  
*{{ note.date | date: "%c" }}*
{: .note}
{% endfor %}
