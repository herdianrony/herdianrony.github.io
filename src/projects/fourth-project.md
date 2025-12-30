---
title: Fourth Project
date: 2023-01-04
layout: base
description: A UI design project
tags: [design, ui]
demo: https://fourth-project-demo.com
---

<article>

<h1>{{ title }}</h1>

<p>{{ description }}</p>

<p>Tags: {% for tag in tags %}<a href="/tags/{{ tag }}/">{{ tag }}</a> {% endfor %}</p>

{% if github %}<p><a href="{{ github }}">GitHub</a></p>{% endif %}

{% if demo %}<p><a href="{{ demo }}">Demo</a></p>{% endif %}

# Fourth Project

This is a UI design project showcase.

</article>
