{% extends "../layout/layout.tpl" %}

{% block content %}
     <ul>  	 
  	 {%for v in list[0] %}
        <li> {{ v.goodsId }} </li>
        <li> {{ v.title }} </li>
        <li> {{ v.price }} </li>
        <li> {{ v.updateTime }} </li>
     {% endfor %}
     </ul>
{% endblock %}