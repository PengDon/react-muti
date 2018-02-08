'use strict';

module.exports = app => {
  class UsersController extends app.Controller {
    * list() {
      const ctx = this.ctx;
      const usersList = yield ctx.service.hackerUsers.getList();
      yield ctx.render('users/list.tpl', { list: usersList });
    }
	}
  return UsersController;
};
