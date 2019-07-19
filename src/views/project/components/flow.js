import React from 'react'
import { Collapse } from 'antd'
import FlowCard from './flowCard'
import 'antd/dist/antd.css'
import './flow.scss'
const { Panel } = Collapse


class Flow extends React.Component {
  constructor(props){
    super(props)
    var flow = {

    }
    this.state={
      flow,
      id: props.id
    }
  }
  
  componentDidMount() {
    this.setState({
      id: this.state.id
    })
  }  
  

  render() {
    const text = (
      <p style={{ paddingLeft: 24 }}>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
        as a welcome guest in many households across the world.
      </p>
    )
    return (
    <Collapse defaultActiveKey={['1']} className="flowCollapse">
      <Panel
        className="flowPanel"
        header="Flow"
        key="1">
        {
          <FlowCard flow={this.state.flow}></FlowCard>
        }
      </Panel>
      <Panel
        className="flowPanel"
        header="DeleteFlow"
        key="2">
        {text}
      </Panel>
    </Collapse>
    )
  }
}
  
export default Flow
