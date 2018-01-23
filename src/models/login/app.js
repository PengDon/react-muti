import React, { Component } from 'react';
import api from '../../services/login';


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
    login = async () => {
        // 空值校验
        if (!this.state.loginName || !this.state.loginPwd) {
            alert("用户名或密码不能为空");
            return;
        }
        // 获取接口结果 
        let result = await api.login(this.state);
        if (result.success) {
            // 跳转到首页
            window.location.replace("#/");
        } else {
            alert(result.msg);
            this.setState({ loginName: '', loginPwd: '' });
        }
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