---
title: My First Project
date: 2023-01-01
layout: layouts/base
description: A sample project
tags: [web, project]
github: https://github.com/example/first-project
demo: https://first-project-demo.com
---

<article>

<h1>{{ title }}</h1>

<p>{{ description }}</p>

<p>Tags: {% for tag in tags %}<a href="/tags/{{ tag }}/">{{ tag }}</a> {% endfor %}</p>

{% if github %}<p><a href="{{ github }}">GitHub</a></p>{% endif %}

{% if demo %}<p><a href="{{ demo }}">Demo</a></p>{% endif %}

# My First Project

This is a description of my first project.

</article>
