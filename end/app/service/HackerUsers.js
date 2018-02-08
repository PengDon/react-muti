'use strict';

module.exports = app => {
	/**
	 * HackerGoods Api Service
	 */
	class HackerUsers extends app.Service {
		constructor(ctx) {
			super(ctx);
		}

		* getList() {
			return yield app.mysql.select('_user');
		}
	}

	return HackerUsers;
};