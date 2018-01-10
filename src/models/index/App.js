import React, { Component } from 'react';
import './app.less';
import axios from 'axios';
import '../../mock/db';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentWillMount() {
    axios.get('/home/menu').then(data => {
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
        <img src={obj.img} alt="" />
      </li>
    )

    return (
      <div><ul>{nameDom}</ul></div>
    )
  }
}

export default App;
