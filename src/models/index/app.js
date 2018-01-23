import React, { Component } from 'react';
import Cookie from '../../utils/cookie';


class App extends Component {

  
  componentWillMount() {
    let isLogin = Cookie.get('login');
    if(!isLogin){
      console.log("未登录，跳转到登录");
      // 跳转到登录页面
      window.location.replace("#/login");
    }
  }
  
  render() {
    return (
      <div>首页</div>
    );
  }
}

export default App;
