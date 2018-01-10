import React, { Component } from 'react';
import './app.less';
import Mock from 'mockjs';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentWillMount() {
    Mock.mock('/home/menu', {
      'list|1-9': [{
        'id|+1': 1,
        'name': '@cname',
        'text':'@paragraph',
        'address':'@province',
        'img':"@image('200x100', '#ffcc33', '#FFF', 'png', 'の')"
      }]
    });
    axios.get('/home/menu').then(data => {
      console.log(data.data.list);
      this.setState({ list: data.data.list });
    });
  }
  render() {
    const names = this.state.list;
    const nameDom = names.map((obj) =>
      <li key={obj.id}>
        <h3>{obj.name}</h3>
        <p>{obj.address}</p>
        <p>{obj.text}</p>
        <img src={obj.img} alt=""/>
      </li>
    )

    return (
      <div><ul>{nameDom}</ul></div>
    )
  }
}

export default App;
