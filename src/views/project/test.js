import { Link, Switch, Route, Redirect, HashRouter, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import React from 'react'
import List from './list'

const { Header, Sider, Content } = Layout;

const LeftSider = withRouter(({ history }) => {
  return (
    <Sider >
      <Menu
        mode="inline"
        defaultSelectedKeys={['/new-pro']}
        selectedKeys={[history.location.pathname]}
        theme="dark">
        <Menu.Item key="/new-pro">
          <Link to="/new-pro" replace />
          新建项目
        </Menu.Item>
        <Menu.Item key="/pro-list">
          <Link to="/pro-list" replace />
          项目列表
        </Menu.Item>
      </Menu>
    </Sider>
  );
})

class Test extends React.Component {
  render() {
    return (
      <HashRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <LeftSider />
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <div
                style={{
                  margin: '24px 16px',
                  padding: 0,
                  background: '#fff',
                  minHeight: 850,
                }}   >
                <main>
                  <Switch>
                    <Route path="/new-pro" component={List} />
                    <Route path="/pro-list" component={List} />
                    <Redirect to="/new-pro" />
                  </Switch>
                </main>
              </div>
            </Content>
          </Layout>
        </Layout>
      </HashRouter>
    );
  }
}
export default Test;