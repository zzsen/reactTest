import React from 'react'
import 'antd/dist/antd.css'
import './tab.css'
import List from './list'
import { Tabs } from 'antd'
const { TabPane } = Tabs

class Tab extends React.Component {
  render() {
    return (
      <div className="ProjectTab">
        <Tabs
          defaultActiveKey="1"
          tabPosition="left"
          type="card">
          <TabPane tab="Tab 1" key="1">
            <List type='aaa'/>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <List type='bbb'/>
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            <List type='ccc'/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
  
export default Tab
