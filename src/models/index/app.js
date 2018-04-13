import React, { Component } from 'react';
import '../../assets/style/don.less';
import tsh from '../../components/all';

class App extends Component {
  
  constructor(){
    super();
  }

  componentWillMount() {
    
  }

  showTip = ()=>{
    // don.alert("德州扒鸡",{ title: '66元一只' });
    tsh.confirm('普通的confirm')
  }

  render() {
    return (
      <div>
        <input type="button" value="按钮" className="don-btn_primary" onClick={this.showTip}/>
      </div>
    );
  }
}

export default App;
