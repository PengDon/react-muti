import React, { Component } from 'react';
import './app.less';

class App extends Component {
  render() {
    const userList =  [
      { username: 'Jerry', age: 21, gender: 'male', id: 1 },
      { username: 'Tomy', age: 22, gender: 'male', id: 2 },
      { username: 'Lily', age: 19, gender: 'female', id: 3 },
      { username: 'Lucy', age: 20, gender: 'female', id: 4 }
    ]
    const listItems = userList.map((user) =>
      <li key={user.id}>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
      </li>
    );
    return (
      <div><ul>{listItems}</ul></div>
    );
  }
}

export default App;
