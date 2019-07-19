import React from 'react'
import { Collapse, Card, Button } from 'antd'
import 'antd/dist/antd.css'
import './flow.scss'
const { Panel } = Collapse


class Flow extends React.Component {
  constructor(props){
    super(props)
    this.state={
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
    var flows = []
    var i = 0
    while (i < 20) {
      var steps = []
      var j = 0
      while (j < 5) {
        steps.push({
          id: i * 10 + j,
          name: "step" + (i * 10 + j),
          position: ["1", "2", "3"]
        })
        j++
      }
      flows.push({
        id: i,
        name: 'flow' + i,
        steps
      })
      i++
    }
    console.log(flows)
    return (
    <Collapse defaultActiveKey={['1']} className="flowCollapse">
      <Panel
        className="flowPanel"
        header="Flow"
        key="1">
        {
          flows.forEach(flow => {
            return (
              <Card title="Default size card" extra={<Button>More</Button>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              )
          })
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
