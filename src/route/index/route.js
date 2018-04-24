import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pages from './page';
import Cookie from '../../utils/cookie';
import {
  Switch,
  HashRouter as Router,
  Route
  // IndexRoute,
  // Link
} from 'react-router-dom';

  const routes = [
    {path:'/',component:Pages.Login, exact:true},
    {path:'/home',component:Pages.Home},
    {path:'/auth',component:Pages.Auth},
    {path:'/auth2',component:Pages.Auth2},
    {path:'/bank',component:Pages.Bank}
  ];

  const App = (props,context)=>(
    <Router>
      <Switch>
        {
          routes.map((item,index)=>(
             <Route key={item.path} path={item.path} exact={item.exact} component={item.component}/>
          ))
        }
      </Switch>
    </Router>
  )
  
  ReactDOM.render(
      <App />,
    document.getElementById('root'));
    