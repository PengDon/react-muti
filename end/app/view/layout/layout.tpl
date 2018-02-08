<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="/public/css/news.css" />
    <link rel="icon" href="/public/favicon.png" type="image/x-icon">
    <title>{% block title %}egg - HackerNews{% endblock %}</title>
  </head>
  <body>
    <div id="wrapper">
      <div id="header">
        <a id="yc" href="http://www.ycombinator.com"><img src="https://news.ycombinator.com/y18.gif"></a>
        <h1><a href="/news">hi,don</a></h1>
      </div>
      {% block content %}{% endblock %}
    </div>
  </body>
</html>
