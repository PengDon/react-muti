'use strict';

const fs = require('fs');
const path = require('path');

module.exports = appInfo => {
  const config = {};

	// should change to your own
  config.keys = appInfo.name + '123456';

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
  };

  // config.news = {
  //   pageSize: 30,
  //   serverUrl: 'https://hacker-news.firebaseio.com/v0',
  // };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.nj': 'nunjucks',
    },
  };

  config.mysql = {
		// 单数据库信息配置
    client: {
			// host
      host: '127.0.0.1',
			// 端口号
      port: '3306',
			// 用户名
      user: 'root',
			// 密码
      password: 'usbw',
			// 数据库名
      database: 'yiibaidb',
    },
		// 是否加载到 app 上，默认开启
    app: true,
		// 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return config;
};
