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
    console.log(user);
    if(!user.isLogin){
      console.log("未登录，跳转到登录");
      // 跳转到登录页面
      window.location.replace("#/login");
    }
    this.setState({userName:user.loginName});
  }
  
  render() {
    return (
      <div>
        <h1>首页</h1>
        <p>欢迎{this.state.userName}</p>  
      </div>
    );
  }
}

export default App;
