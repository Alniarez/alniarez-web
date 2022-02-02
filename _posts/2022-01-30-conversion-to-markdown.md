---
layout: post
title: Markdown everywhere!
tags: website
---

The entirety of the website "*source*" is now writen in markdown.

I have converted most of the website to the [standard markdown language](https://www.markdownguide.org/basic-syntax/).

The blog post were already written this way, but not the main pages.

I used some classes and HTML elements for styling and javascript to obfuscate my email from being in plain text. I have been able to keep all the same by using the useful [kramdown Syntax](https://kramdown.gettalong.org/syntax.html).

With the extra Kramdown Inline Attribute Lists I can do most of what I wanted to do.

How different it looks? Hopefully it will not look different at all on the browser. But on the source files it is a big change:

```html
<div class="flex column">
    <section>
        <h1 class="font-title">Alniarez</h1>
    </section>
    <section>
        <p class="font-sub-title">This my personal lair <span style="text-decoration: line-through">constantly evolving website</span>. Here you can find all the stuff that comes out of my spare time: software, games, photography and other shenanigans.</p>
    </section>
</div>
```
Turns into this
```markdown
# Alniarez
{: .font-title}

This my personal lair ~~constantly evolving website~~. Here you can find all the stuff that comes out of my spare time: software, games, photography and other shenanigans.
{: .font-sub-title}
```

Pretty nice. But I there is more to do. There are 2 things I want to do with markdown that right now I can't/don't do:
* Icon on markdown and not a HTML <i> element
* Section that group up multime block elements. basically <div> o <section>






