import React, { Component } from 'react';
import './app.less';

class App extends Component {
  render() {
    const users =  [
      { username: 'Jerry', age: 21, gender: 'male', id: 1 },
      { username: 'Tomy', age: 22, gender: 'male', id: 2 },
      { username: 'Lily', age: 19, gender: 'female', id: 3 },
      { username: 'Lucy', age: 20, gender: 'female', id: 4 }
    ]
    const listItems = users.map((value) =>
      <li key={value.id}>
        <div>姓名：{value.username}</div>
        <div>年龄：{value.age}</div>
        <div>性别：{value.gender}</div>
      </li>
    );
    return (
      <div><ul>{listItems}</ul></div>
    );
  }
}

export default App;
