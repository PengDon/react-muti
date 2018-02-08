'use strict';

module.exports = app => {
  class NewsController extends app.Controller {
    * list() {
      const ctx = this.ctx;
      const orderList = yield ctx.service.hackerNews.getList();
      yield ctx.render('news/list.tpl',{list:orderList});
    }

    * detail() {
      const ctx = this.ctx;
      const id = ctx.params.id;
      const newsInfo = yield ctx.service.hackerNews.getItem(id);
      // get comment parallel
      const commentList = yield (newsInfo.kids || []).map(id => ctx.service.hackerNews.getItem(id));
      yield ctx.render('news/detail.tpl', { item: newsInfo, comments: commentList });
    }

    * user() {
      const ctx = this.ctx;
      const id = ctx.params.id;
      const userInfo = yield ctx.service.hackerNews.getUser(id);
      yield ctx.render('news/user.tpl', { user: userInfo });
    }
  }
  return NewsController;
};
