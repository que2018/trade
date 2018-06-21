import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Button from 'antd/lib/button';

import ComponentHome from './component/ComponentHome';
import ComponentDatePicker from './component/ComponentDatePicker';
import ComponentButton from './component/ComponentButton';

import './App.css';

class App extends Component {
  render() {
    return (
	  <div>
	  <Route exact path="/" component={ComponentHome}/>
	  <Route path="/date_picker" component={ComponentDatePicker}/>
	  <Route path="/button" component={ComponentButton}/> 
	  </div>
    );
  }
}

export default App;
