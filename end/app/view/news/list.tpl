{% extends "../layout/layout.tpl" %}
{% block content %}
  <div class="news-view view v-transition">
  <table>
     <tr>
     <th>客户名称</th>
     <th>联系方式</th>
     <th>所在地区</th>
     </tr>
    {% for v in list %}
      <tr> 
      <td>{{ v.customerName }} </td>
      <td>{{ v.phone }} </td>
      <td>{{ v.city }} </td>
      </tr>
    {% endfor %}
    </table>
  </div>
{% endblock %}
