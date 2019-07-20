import React from 'react'
import { Tabs } from 'antd'
import Member from './member'
import Flow from './flow'
import 'antd/dist/antd.css'
import './moreInfo.scss'
const { TabPane } = Tabs


class PruductList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      id: props.id
    }
  }
  
  componentDidMount() {
    this.setState({
      id: this.state.id
    });
  }  
  render() {
    return (
      <div className="ProductList">
        <Tabs
          defaultActiveKey="member"
          tabPosition="left"
          type="card">
          <TabPane tab='memberInfo' key='member'>
            <Member></Member>
          </TabPane>
          <TabPane tab='flowInfo' key='flow'>
            <Flow></Flow>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
  
export default PruductList
