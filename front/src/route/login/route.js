import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './page';
import {
    Switch,
    HashRouter as Router,
    Route
    // IndexRoute,
    // Link
  } from 'react-router-dom';

  const {Login} = Pages;

  const routes = [
    {path:'/login',component:Login, exact:true}
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
    