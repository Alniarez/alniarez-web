---
layout: default
title: Notes
noindex: yes
---

Me, screaming into the void.

---

{% for note in site.data.notes %}
{{ note.note }} {% if note.image %}![image for note {{ note.date | date: "%c" }}](/assets/images/notes/{{ note.image }}){: .note-thumbnail .image-gallery-thumbnail} {% endif %}  
*{{ note.date | date: "%c" }}*
{: .note}
{% endfor %}

{% include image-viewer.html %}