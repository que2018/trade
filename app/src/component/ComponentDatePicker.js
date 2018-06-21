import React, { Component } from 'react';
import { Link, Route,Switch } from 'react-router-dom';
import { RangePicker, WeekPicker, DatePicker } from 'antd';

class ComponentDatePicker extends Component {
  render() {
    return (
      <div>
	    <DatePicker />
      </div>
    );
  }
}


export default ComponentDatePicker;