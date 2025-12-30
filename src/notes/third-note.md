---
title: Third Note
date: 2023-01-03
layout: layouts/base
tags: [tutorial, web]
---

<article>

<h1>{{ title }}</h1>

<time>{{ page.date | date: "%Y-%m-%d" }}</time>

<p>Tags: {% for tag in tags %}<a href="/tags/{{ tag }}/">{{ tag }}</a> {% endfor %}</p>

# Third Note

This is a tutorial note about web development.

</article>
