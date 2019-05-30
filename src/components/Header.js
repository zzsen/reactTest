import React from 'react';
import './Header.scss';
import { Tag } from 'antd'


class Header extends React.Component {
  render() {
    return (
      <div className="AppHeader">
        <div className="AppName">
          <span className="AppNameText">React-Test</span>
          <Tag className="AppTag">I'm a tag</Tag>
        </div>
      </div>
    )
  }
}

export default Header;
