---
title: Fourth Note
date: 2023-01-04
layout: base
tags: [javascript, code]
---

<article>

<h1>{{ title }}</h1>

<time>{{ page.date | date: "%Y-%m-%d" }}</time>

<p>Tags: {% for tag in tags %}<a href="/tags/{{ tag }}/">{{ tag }}</a> {% endfor %}</p>

# Fourth Note

This note covers JavaScript coding tips.

</article>
