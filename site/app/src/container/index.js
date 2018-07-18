import React , { Component }  from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ComponentHome from './home/home';
import ComponentLogin from '../components/login';
import ComponentInfo from '../components/info';
import test from '../components/test';

export const history = createHistory();

const AppRouter= () => (


<Router history={history} >
	  <div>
      <Switch>
        {/* <Route exact path="/" component={test} /> */}
	    <Route exact path="/" component={ComponentHome} />
	      {/* <Route exact path="/login" component={ComponentLogin} />
        <Route exact path="/info" component={ComponentInfo} /> */}
      </Switch>
	  </div>
</Router>

  
    )

export default AppRouter;
