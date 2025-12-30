---
title: Second Note
date: 2023-01-02
layout: layouts/base
tags: [test, demo]
---

<article>

<h1>{{ title }}</h1>

<time>{{ page.date | date: "%Y-%m-%d" }}</time>

<p>Tags: {% for tag in tags %}<a href="/tags/{{ tag }}/">{{ tag }}</a> {% endfor %}</p>

# Second Note

This is another note.

</article>
