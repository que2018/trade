import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ComponentHome from './component/ComponentHome';

import './App.css';

class App extends Component {
  render() {
    return (
	  <div>
	  <Route exact path="/" component={ComponentHome}/>

	  </div>
    );
  }
}

export default App;
