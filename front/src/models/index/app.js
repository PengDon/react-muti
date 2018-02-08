import React, { Component } from 'react';
import Cookie from '../../utils/cookie';


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      userName:''
    };
  }
  
  getLoginInfo =()=>{
    console.log(88888);
    let user = Cookie.get('login');
    this.setState({userName:user.loginName});
  }

  componentWillMount() {
    this.getLoginInfo();
  }
  // 登出
  logout=()=>{
     Cookie.del('login');
     this.getLoginInfo();
     window.location.reload();
    //  window.location.replace('#/login');
  }  
  render() {
    return (
      <div>
        <h1>首页</h1>
        <p>欢迎{this.state.userName}</p>
        <ul>
      
            <li> <a href="#/detail">detail</a></li>
            <li> <a href="#/my">我的页面需要登录验证</a></li>
            <li> <a href="#/test">test</a></li>
            <li> <a href="#/comment">comment</a></li>
            <li><a href="#/shop/2365">shop</a></li>
          </ul>
            {
              this.state.userName ? <button onClick={this.logout}>登出</button>  :  <a href="#/login">login</a>
            }
        
      </div>
    );
  }
}

export default App;
