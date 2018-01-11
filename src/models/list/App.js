import React, { Component } from 'react';
import './app.less';

// 渲染静态数据列表
class App extends Component {
  render() {
    const users =  [
      { username: 'Jerry', age: 21, gender: 'male', id: 1 },
      { username: 'Tomy', age: 22, gender: 'male', id: 2 },
      { username: 'Lily', age: 19, gender: 'female', id: 3 },
      { username: 'Lucy', age: 20, gender: 'female', id: 4 }
    ]
    const listItems = users.map((user) =>
      <li key={user.id}>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
      </li>
    );
    return (
      <div><ul className="red">{listItems}</ul></div>
    );
  }
}

export default App;
