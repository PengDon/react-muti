'use strict';

module.exports = app => {
  class GoodsController extends app.Controller {
    * list() {
      const ctx = this.ctx;
      const pageSize = 10;
      const page = 1;
      const goodsList = yield ctx.service.hackerGoods.getList(page);
      yield ctx.render('goods/list.tpl', { list: goodsList, page, pageSize });
    }
	}
  return GoodsController;
};
