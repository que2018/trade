import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React ,{ Component } from 'react'
import ReactDOM from 'react-dom';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout style={{ height: '1400px' } }>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width = {280}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys = {['sub1']}
           style={{ padding: '16px 0', width: '100%' }}>


          <SubMenu key="sub1" title={<span><Icon type="user" /><span>account</span></span>}>
            <Menu.Item key="1">profile</Menu.Item>
            <Menu.Item key="2">security</Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" title={<span><Icon type="wallet" /><span>wallet</span></span>}>
            <Menu.Item key="5">balance</Menu.Item>
            <Menu.Item key="6">deposit</Menu.Item>
            <Menu.Item key="7">exchange</Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" title={<span><Icon type="setting"/><span>setting</span></span>}>
            <Menu.Item key="9">api</Menu.Item>
          </SubMenu>


          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              style={{ fontSize: 25}}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
  export default Sidebar;



  