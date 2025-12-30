---
title: Third Project
date: 2023-01-03
layout: base
description: A mobile app project
tags: [mobile, app]
github: https://github.com/example/third-project
---

<article>

<h1>{{ title }}</h1>

<p>{{ description }}</p>

<p>Tags: {% for tag in tags %}<a href="/tags/{{ tag }}/">{{ tag }}</a> {% endfor %}</p>

{% if github %}<p><a href="{{ github }}">GitHub</a></p>{% endif %}

{% if demo %}<p><a href="{{ demo }}">Demo</a></p>{% endif %}

# Third Project

Details of the third project, a mobile app.

</article>
