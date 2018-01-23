import React, { Component } from 'react';

/**
 * 简版登录实现
 */
class App extends Component {
    // 局部变量
    state = {
        loginName: '', // 登录名称
        loginPwd: ''   // 登录密码
    }

    // 检查登录名称
    loginName = e => {
        let loginName = e.target.value;
        this.setState({ loginName: loginName });

    }

    // 检查登录密码
    loginPwd = e => {
        let loginPwd = e.target.value;
        this.setState({ loginPwd: loginPwd });
    }

    // 登录 
    login = () => {
        // 空值校验
        if(!this.state.loginName || !this.state.loginPwd){
           alert("用户名或密码不能为空");
           return;
        }
        // 密码长度校验
        if(!/^.{6,16}/.test(this.state.loginPwd)){
            alert("密码格式错误");
            return;
        }
        console.log("login");
    }

    render() {
        return (
            <div>
                <div className=""><input type="text" placeholder="用户名" onInput={this.loginName} value={this.state.loginName} /></div>
                <div className=""><input type="password" placeholder="密码" onInput={this.loginPwd} value={this.state.loginPwd} /></div>
                <div className=""><input type="button" value="登录" onClick={this.login} /></div>
            </div>
        );
    }
}

export default App;