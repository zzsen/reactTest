import React from 'react';
import './Header.scss';
import { HashRouter as Router, NavLink } from "react-router-dom"
import { Tag, Menu, Icon } from 'antd'
const { SubMenu }  = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      current: 'mail',
      menus: [ 
        {
          name: 'one',
          path: '/project/list',
          exact: true
        }, {
          name: 'two',
          path: '/two',
          exact: true,
          children: [ 
            {
              name: 'group-one',
              menus: [ 
                {
                name: 'two-one',
                path: '/two_one',
                exact: true
                }, 
                {
                name: 'two-two',
                path: '/two_two',
                exact: true
                } 
              ]
            },
            {
              name: 'group-two',
              menus: [ 
                  {
                    name: 'two-one',
                    path: '/two_one',
                    exact: true
                  }, {
                    name: 'two-two',
                    path: '/two_two',
                    exact: true
                  }
                ]
            }
          ]
        }, {
          name: 'three',
          path: '/three',
          exact: true
        } 
      ]
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }  

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }

  handleClick = e => {
    this.setState({
      current: e.key
    });
  }

  /**
   * menu渲染
   *
   * @returns
   * @memberof Header
   */
  getMenus () {
    const menus = this.state.menus.map((menuItem)=>
      menuItem.children ? (
        <SubMenu
          key={menuItem.path}
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              {menuItem.name}
            </span>
          }
        >
        {
          menuItem.children.map(sonGroup=>
            <Menu.ItemGroup
              key={sonGroup.name}
              title={sonGroup.name}>
            {
              sonGroup.menus.map(subMenu=>
                <Menu.Item key={subMenu.path}>
                  <NavLink
                    to={subMenu.path}
                    exact={subMenu.exact}
                    activeClassName="navActive">
                    {subMenu.name}
                  </NavLink>
                </Menu.Item>
              )
            }
            </Menu.ItemGroup>
          )
        }
        </SubMenu>
      ) : (
        <Menu.Item 
          key={menuItem.path}>
          <NavLink
            to={menuItem.path}
            exact={menuItem.exact}
            activeClassName="navActive">
            <Icon type="mail" />
            {menuItem.name}
          </NavLink>
        </Menu.Item>
      )
    )
    return ( 
      <Router>
        <Menu
          className="AppMenu"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal">
          {menus}
        </Menu>
      </Router> )
  }

  render() {
    return (
      <div className="AppHeader">
        <Router>
          <NavLink
            to="/"
            exact={true}
            activeClassName="navActive">
            <div className="AppName">
              <span className="AppNameText">React-Test</span>
              <Tag className="AppTag">I'm a tag</Tag>
            </div>
          </NavLink>
        </Router>
        <div className="AppUserName">
          <span className="userInfo">用户名称</span>
          <span className="logoutBtn">
            <Icon type="logout" />退出
          </span>
          It is {this.state.date.toLocaleTimeString()}.
        </div>
        {this.getMenus()}
      </div>
    )
  }
}

export default Header;
