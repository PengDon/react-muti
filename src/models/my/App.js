import React, { Component } from 'react';
import './app.less';
import axios from 'axios';
import '../../mock/db';


// // 渲染静态数据列表,方式1
// class App extends Component {
  
//   constructor(){
//     super();
//     this.state = {
//       list:[]
//     };
//   }

//   componentWillMount(){
//      axios.get('/names').then(data=>{
//        console.log(data.data.list);
//        this.setState({list:data.data.list});
//      })
//   }

//   render() {
//     const users = this.state.list;
//     const listItems = users.map((user) =>
//       <li key={user.id}>
//         姓名：{user.name}---
//         年龄：{user.age}---
//         所在地：{user.address}
//       </li>
//     );
//     return (
//       <div><ul>{listItems}</ul></div>
//     );
//   }
// }


// 渲染静态数据列表,方式2
class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <li>
      姓名：{user.name}---
      年龄：{user.age}---
      所在地：{user.address}
      </li>
    )
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      list:[]
    };
  }

  componentWillMount(){
     axios.get('/names').then(data=>{
       console.log(data.data.list);
       this.setState({list:data.data.list});
     })
  }


  render() {
    const users = this.state.list;
    return (
      <div>
        <ul>{users.map((user) => <User key={user.id} user={user} />)}</ul>
      </div>
    )
  }
}

export default App;
