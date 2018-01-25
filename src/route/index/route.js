import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './page';
import Cookie from '../../utils/cookie';

import {
    Switch,
    HashRouter as Router,
    Route
    // IndexRoute,
    // Link
  } from 'react-router-dom';

  // const {Home,Login} = Pages;
  
  // notCheckLogin:true ==>表示用验证是否登录
  const routes = [
    {path:'/',component:Pages.Home, exact:true,notCheckLogin:true},
    {path:'/login',component:Pages.Login,notCheckLogin:true},
    {path:'/my',component:Pages.My}
  ];

  const isLogin=()=>{
    return Cookie.get('login').isLogin;
  };

  const checkLogin=(routesIndex)=>{
    var component;
    (async()=>{
        if(!isLogin()){// 还没登录
          if(routes[routesIndex].notCheckLogin){//不需要验证登录
              component = routes[routesIndex].component; 
          }else if(routes[routesIndex].path=='/login'){
              component = routes[routesIndex].component; 
          }else{
            component =Pages.Login; 
          }
        }else if(routes[routesIndex].path=='/login'){ //已登录访问登录页直接跳转到首页
          component = Pages.Home;
        }else{
          component = routes[routesIndex].component; 
        }
    })();
    return component;
  }

  const App = (props,context)=> (
    <Router>
      <Switch>
        {
          routes.map((item,index)=>(
             <Route key={item.path} path={item.path} exact={item.exact} component={checkLogin(index)}/>
          ))
        }
      </Switch>
    </Router>
  )
  
  ReactDOM.render(<App />, document.getElementById('root'));
    