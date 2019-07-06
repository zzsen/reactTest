import React from 'react'
import './Header.scss'
import { HashRouter as Router, NavLink, withRouter } from "react-router-dom"
import { Tag, Menu, Icon } from 'antd'
const { SubMenu }  = Menu

const allMenus = [ 
  {
    name: '项目列表',
    path: '/project/list',
    exact: true,
    icon: 'mdi mdi-format-list-bulleted-type'
  }, {
    name: 'two',
    path: '/two',
    exact: true,
    icon: 'mdi mdi-format-list-bulleted-type',
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
    exact: true,
    icon: 'mdi mdi-format-list-bulleted-type'
  } 
]

/**
 * menu渲染
 *
 * @returns
 * @memberof Header
 */
const Menus = withRouter(({ history }) => {
  const menus = allMenus.map((menuItem)=>
    menuItem.children ? (
      <SubMenu
        key={menuItem.path}
        title={
          <span className="submenu-title-wrapper">
            <i className={menuItem.icon}></i>
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
          <i className={menuItem.icon}></i>
          {menuItem.name}
        </NavLink>
      </Menu.Item>
    )
  )
  return ( 
    <Menu
      className="AppMenu"
      selectedKeys={[history.location.pathname]}
      mode="horizontal">
      {menus}
    </Menu>
  )
})

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
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
    })
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
        <Router>
          <Menus/>
        </Router>
      </div>
    )
  }
}

export default Header
