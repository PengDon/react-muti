{% extends "../layout/layout.tpl" %}

{% block content %}
     <ul>  	 
  	 {%for v in list %}
        <li> {{ v.user_id }} </li>
        <li> {{ v.user_name }} </li>
        <li> {{ v.user_phone }} </li>
        <li> {{ v.score }} </li>
     {% endfor %}
     </ul>
{% endblock %}