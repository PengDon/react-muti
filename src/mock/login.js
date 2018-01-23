import Mock from 'mockjs';
import Cookie from '../utils/cookie';

const login = {
    loginName:'don',
    loginPwd:'test123'
}

// 登录
Mock.mock('/login',function(options){
   let result = {
       "status":"200",
       "success":false,
       "msg":"用户名或密码错误请重新尝试!"
   };
   let opts = JSON.parse(options.body);
   console.log(opts);
   if(opts.loginName === login.loginName && opts.loginPwd === login.loginPwd){
     result.success = true;
     result.msg = '登录成功，自动跳转到首页';
     let user = {"isLogin":true,"loginName":opts.loginName};
     Cookie.set('login',user);
   }
   return result;
});