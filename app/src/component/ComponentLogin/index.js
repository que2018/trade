import React, { Component } from 'react';

import ComponentHeader from '../ComponentHeader';
import ComponentFooter from '../ComponentFooter';

import './login.css';

class ComponentLogin extends Component {
  render() {
    return (
	    <div>
		  <ComponentHeader></ComponentHeader>
		  <ComponentFooter></ComponentFooter>
		</div>
    );
  }
}

export default ComponentLogin;