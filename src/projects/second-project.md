---
title: Second Project
date: 2023-01-02
layout: layouts/base
description: Another project
tags: [app, demo]
github: https://github.com/example/second-project
---

<article>

<h1>{{ title }}</h1>

<p>{{ description }}</p>

<p>Tags: {% for tag in tags %}<a href="/tags/{{ tag }}/">{{ tag }}</a> {% endfor %}</p>

{% if github %}<p><a href="{{ github }}">GitHub</a></p>{% endif %}

{% if demo %}<p><a href="{{ demo }}">Demo</a></p>{% endif %}

# Second Project

Details of the second project.

</article>
