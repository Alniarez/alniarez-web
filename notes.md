---
layout: default
title: Notes
noindex: yes
---

Me, screaming into the void.

{% for note in site.data.notes %}
{{ note.note }}  
*{{ note.date | date_to_rfc822 }}*
{: .note}
{% endfor %}