import React from 'react'
import { Tabs } from 'antd'
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
      <div className="ProductList">
        <Tabs
          defaultActiveKey="1"
          tabPosition="left"
          type="card">
          {
            projectTypes.map((type) => (
              <TabPane tab={type.tab} key={type.key}>
              </TabPane>
            ))
          }
        </Tabs>
      </div>
    )
  }
}
  
export default PruductList
