import React from 'react'
import { Tabs } from 'antd'
import Member from './member'
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
          defaultActiveKey="Member"
          tabPosition="left"
          type="card">
          <TabPane tab='memberInfo' key='member'>
            <Member></Member>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
  
export default PruductList
