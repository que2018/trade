import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ComponentHome from './component/ComponentHome';
import ComponentLogin from './component/ComponentLogin';

import './App.css';

class App extends Component {
  render() {
    return (
	  <div>
	    <Route exact path="/" component={ComponentHome} />
	    <Route exact path="login" component={ComponentLogin} />
	  </div>
    );
  }
}

export default App;
