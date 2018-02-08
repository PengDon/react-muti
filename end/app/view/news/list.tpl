{% extends "../layout/layout.tpl" %}
{% block content %}
  <div class="news-view view v-transition">
    {% for v in list %}
      {{ v.customerName }}
    {% endfor %}
  </div>
{% endblock %}
