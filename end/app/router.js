'use strict';

module.exports = app => {
  app.redirect('/', '/news');
  app.get('/news', app.controller.news.list);
  app.get('/news/item/:id', app.controller.news.detail);
  app.get('/news/user/:id', app.controller.news.user);
  app.get('/goods/list', app.controller.goods.list);
  app.get('/users/list', app.controller.users.list);
};
