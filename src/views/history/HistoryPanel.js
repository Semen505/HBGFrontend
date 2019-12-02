import React from 'react';
import HistoryList from './HistoryList';
import '../../assets/css/History.css';
import { Layout, Menu, Icon, Switch, Breadcrumb, Col } from 'antd';
import history from 'history/history'

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

class HistoryPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      theme: 'dark',
      current: 'history',
    }
  }
  gotoDictionary = (e) => {
    e.preventDefault();
      history.push('/dictionary')
  }
  changeTheme = value => {
    let state = this.state;
    state['theme'] = value ? 'dark' : 'light'
    this.setState({state});
  };

  handleClick = e => {
      if(e.key !== "signout" && e.key !== "setting"){
        this.setState({
            current: e.key,
        });
      }
  };

  render() {
    return (
        <Layout>
          <Header className="header-img">
                  Welcome Star
          </Header> 
          <Menu 
            theme={this.state.theme}
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal">
            <Menu.Item key="history" >
                <Icon type="history" />
                History
            </Menu.Item>
            <Menu.Item key="dictionary">
                <a onClick={this.gotoDictionary}><Icon type="solution" />
                Dictionary
                </a>
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                    <Icon type="setting" />
                    Setting
                </span>
              }
            >
              <Menu.Item key="setting">
                  <Switch
                      checked={this.state.theme === 'dark'}
                      onChange={this.changeTheme}
                      checkedChildren="Dark"
                      unCheckedChildren="Light"
                  />
                  Change
              </Menu.Item>
              <Menu.Item key="signout">
                  <Icon type="signout" />
                  Sign out
              </Menu.Item>
            </SubMenu>
          </Menu>  
          <Content className="content-img">
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
              <div style={{ background: '#fff', padding: 50, minHeight: 800, opacity: '0.8'}}>
              {
                this.state.current==="history" ?
                  <Col span={24}>
                    <HistoryList addHistory={0} />
                  </Col>
                  : ""
              }                  
              </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>History Page Created by Group 2</Footer>
        </Layout>
    )
  }
}

export default HistoryPanel
