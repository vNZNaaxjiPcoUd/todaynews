Today
======
Here we are!

{% assign pp = site.pages | sort_natural: "title" %}
{% for p1 in pp %}{% if p1.what %}[.{{ p1.title }} ]({{ p1.url }}){% endif %}{% endfor %}

