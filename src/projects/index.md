---
title: Projects

layout: layouts/base
---

# My Projects

<select id="tag-filter">

<option value="">All</option>

<option value="web">web</option>

<option value="project">project</option>

<option value="app">app</option>

<option value="demo">demo</option>

</select>

<ul id="project-list">

{% for project in collections.projects %}

<li data-tags="{{ project.data.tags | join: ',' }}"><a href="{{ project.url }}">{{ project.data.title }}</a>: {{ project.data.description }}</li>

{% endfor %}

</ul>

<script>

document.getElementById('tag-filter').addEventListener('change', function() {

  const tag = this.value;

  const items = document.querySelectorAll('#project-list li');

  items.forEach(item => {

    const itemTags = item.dataset.tags.split(',');

    item.style.display = !tag || itemTags.includes(tag) ? '' : 'none';

  });

});

</script>
