---
title: My First Note
date: 2023-01-01
layout: layouts/base
tags: [sample, eleventy]
---

<article>

<h1>{{ title }}</h1>

<time>{{ page.date | date: "%Y-%m-%d" }}</time>

<p>Tags: {% for tag in tags %}<a href="/tags/{{ tag }}/">{{ tag }}</a> {% endfor %}</p>

# My First Note

This is my first note. Welcome!

</article>
