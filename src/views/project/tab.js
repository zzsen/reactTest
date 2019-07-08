import React from 'react'
import 'antd/dist/antd.css'
import './tab.css'
import List from './list'
import { Tabs, Card } from 'antd'
const { TabPane } = Tabs

class Tab extends React.Component {
  render() {
    const projectTypes = [
      {
        key: 1,
        value: 1,
        tab: (<span><i className="mdi mdi-plus-circle-outline"/>新建</span>)
      },
      {
        key: 2,
        value: 2,
        tab: (<span><i className="mdi mdi-plus-circle-outline"/>新建</span>)
      }
    ]

    return (
      <div className="ProjectTab">
        <Card
          title="项目列表"
          extra={<span><i className="mdi mdi-plus-circle-outline"/>新建</span>}>
          <Tabs
            defaultActiveKey="1"
            tabPosition="left"
            type="card">
            {
              projectTypes.map((type) => (
                <TabPane tab={type.tab} key={type.key}>
                  <List type={type.value}/>
                </TabPane>
              ))
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}
  
export default Tab

