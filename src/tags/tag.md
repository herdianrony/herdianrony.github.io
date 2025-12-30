---
layout: layouts/base

pagination:
  data: collections.tagList

  size: 1

  alias: tagName

permalink: /tags/{{ tagName }}/
---

<h1>Tag: {{ tagName }}</h1>

{% for item in collections[tagName] %}

- [{{ item.data.title }}]({{ item.url }})

{% endfor %}
