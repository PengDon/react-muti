import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        console.log(this.props); // 输出父类对象
        console.log(this.props.match.params.id); // 获取指定参数
    }
    render() {
        return (
            <div>{this.props.match.params.id}</div>
        )

    }

}

export default App;
