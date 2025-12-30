---
title: Notes

layout: layouts/base
---

# Notes

<input type="text" id="note-search" placeholder="Search notes">

<ul id="note-list">

{% for note in collections.notes %}

<li><a href="{{ note.url }}">{{ note.data.title }}</a></li>

{% endfor %}

</ul>

<script>

document.getElementById('note-search').addEventListener('input', function() {

  const query = this.value.toLowerCase();

  const items = document.querySelectorAll('#note-list li');

  items.forEach(item => {

    const text = item.textContent.toLowerCase();

    item.style.display = text.includes(query) ? '' : 'none';

  });

});

</script>
