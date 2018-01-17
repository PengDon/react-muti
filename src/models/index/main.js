import React from 'react';
import ReactDOM from 'react-dom';
import '../../assets/style/weui.less';
import Pages from './page';
import {
    Switch,
    HashRouter as Router,
    Route
    // IndexRoute,
    // Link
  } from 'react-router-dom';


const {Home,List,Digl} = Pages;

const routes = [
  {path:'/',component:Home, exact:true},
  {path:'/list',component:List},
  {path:'/dialog',component:Digl}
];

const App = (props,context)=> (
  <Router>
    <Switch>
      {
        routes.map(route=>(
          <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>
        ))
      }
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

