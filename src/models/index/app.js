import React, { Component } from 'react';
import Cookie from '../../utils/cookie';


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      userName:''
    };
  }
  
  componentWillMount() {
    let user = Cookie.get('login');
    if(!user.isLogin){
      console.log("未登录，跳转到登录");
      // 跳转到登录页面
      window.location.replace("#/login");
    }
    this.setState({userName:user.loginName});
  }
  // 登出
  logout(){
     Cookie.del('login');
     window.location.replace('#/login');
  }  
  render() {
    return (
      <div>
        <h1>首页</h1>
        <p>欢迎{this.state.userName}</p>
        <button onClick={this.logout}>登出</button>
      </div>
    );
  }
}

export default App;
