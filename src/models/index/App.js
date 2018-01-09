import React, { Component } from 'react';
import './app.less';
import 'whatwg-fetch';

const users = [
  { username: 'Jerry', age: 21, gender: 'male',id:11111 },
  { username: 'Tomy', age: 22, gender: 'male',id:22222 },
  { username: 'Lily', age: 19, gender: 'female',id:33333 },
  { username: 'Lucy', age: 20, gender: 'female',id:44444 }
]

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <div key={user.id}>姓名：{user.username}</div>
        <div key={user.id}>年龄：{user.age}</div>
        <div key={user.id}>性别：{user.gender}</div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    fetch('/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3')
      .then(res => res.json())
      .then(json => {console.log(json);});
  }

  render() {
    return (
      <div>
        {users.map((user) => <User user={user} />)}
      </div>
    )
  }
}

export default App;
