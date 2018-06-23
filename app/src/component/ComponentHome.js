import React, { Component } from 'react';
import { Layout } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import TweenOne from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';

import 'rc-banner-anim/assets/index.css';
import './home.css';

const BgElement = Element.BgElement;
const { Header, Content, Footer } = Layout;

class ComponentHome extends Component {
  render() {
    return (
	    <Content>
		  <BannerAnim prefixCls="banner-user">
	        <Element prefixCls="banner-user-elem" key="0">
              <BgElement key="bg" className="bg" style={{ backgroundImage: `url("http://bisail.com/assets/image/slider1.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center'}}/>
              <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>Bisail is ready to trade</TweenOne>
              <TweenOne className="banner-user-date" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>Jun. 11th 2018</TweenOne>
			  <div class="button-wrap"><Button size="large">Trade Now</Button></div>
            </Element>
            <Element prefixCls="banner-user-elem" key="1">
              <BgElement key="bg" className="bg" style={{ backgroundImage: `url("http://bisail.com/assets/image/slider2.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center'}}/>
              <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>AMC(Amice coin) on our market</TweenOne>
              <TweenOne className="banner-user-date" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>Jun. 11th 2018</TweenOne>
			  <div class="button-wrap"><Button size="large">Register Now</Button></div>
            </Element>
          </BannerAnim>
		</Content>
    );
  }
}

export default ComponentHome;