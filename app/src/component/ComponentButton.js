import React, { Component } from 'react';
import { Link, Route,Switch } from 'react-router-dom';
import { Button } from 'antd';

class ComponentButton extends Component {
  render() {
    return (
      <div>
		<Button type="primary">Primary</Button>
      </div>
    );
  }
}


export default ComponentButton;