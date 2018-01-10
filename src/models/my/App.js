import React, { Component } from 'react';
import './app.less';

// 渲染静态数据列表,方式1
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
      <div><ul>{listItems}</ul></div>
    );
  }
}


// 渲染静态数据列表,方式2
// class User extends Component {
//   render() {
//     const { user } = this.props;
//     return (
//       <li>
//         <div>姓名：{user.username}</div>
//         <div>年龄：{user.age}</div>
//         <div>性别：{user.gender}</div>
//       </li>
//     )
//   }
// }

// class App extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     list: []
//   //   }
//   // }

//   // componentDidMount() {
//   //   fetch('/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3')
//   //     .then(res => res.json())
//   //     .then(json => {console.log(json);});
//   // }

//   render() {
//     const users = [
//       { username: 'Jerry', age: 21, gender: 'male', id: 1 },
//       { username: 'Tomy', age: 22, gender: 'male', id: 2 },
//       { username: 'Lily', age: 19, gender: 'female', id: 3 },
//       { username: 'Lucy', age: 20, gender: 'female', id: 4 }
//     ]
//     return (
//       <div>
//         <ul>{users.map((user) => <User key={user.id} user={user} />)}</ul>
//       </div>
//     )
//   }
// }

export default App;
