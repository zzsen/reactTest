import React from 'react'
import { Collapse, Card, Button, Timeline, Tag } from 'antd'
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
    var flows = []
    var i = 0
    while (i < 20) {
      var steps = []
      var j = 0
      steps.push({
        id: i * 10 + j,
        name: 'start',
        position: ['1', '2', '3']
      })
      while (j < 5) {
        j++
        steps.push({
          id: i * 10 + j,
          name: 'step' + (i * 10 + j),
          position: ['1', '2', '3']
        })
      }
      steps.push({
        id: i * 10 + j + 1,
        name: 'end',
        position: ['1', '2', '3']
      })
      flows.push({
        id: i,
        name: 'flow' + i,
        isDefault: i === 0,
        createTime: '2019-07-20',
        creator:　'creator' + i,
        steps
      })
      i++
    }
    console.log(flows)
    return (
    <Collapse defaultActiveKey={['1']} className='flowCollapse'>
      <Panel
        className='flowPanel'
        header='Flow'
        key='1'>
        {
          flows.map(flow => {
            return (
              <Card
                key={flow.id}
                className='flowCard'
                extra={
                  <Button type='link' className='opeBtn'>
                    <i className='mdi mdi-trash-can-outline'/>
                    <span>delete</span>
                  </Button>}
                title={
                  <div>
                    {flow.name}&nbsp;
                    {flow.isDefault && (
                      <i
                        className='mdi mdi-clipboard-flow'
                        style={{color: '#108ee9'}}
                        title='default'/>
                    )}
                    <span className='createInfo'>
                      created by {flow.creator} {flow.createTime}
                    </span>
                  </div>
                }>
                <Timeline>
                {
                  flow.steps.map(step=>{
                    return (
                      <Timeline.Item key={step.id}>
                        <div style={{display: 'inline-block', width: "50px"}}>
                          {step.name}
                        </div>
                        <div style={{display: 'inline-block',float: 'right'}}>
                          {step.position.join("、")}
                        </div>
                      </Timeline.Item>
                    )
                  })
                }
                </Timeline>
              </Card>
              )
          })
        }
      </Panel>
      <Panel
        className='flowPanel'
        header='DeleteFlow'
        key='2'>
        {
          flows.map(flow => {
            return (
              <Card
                key={flow.id}
                className='flowCard'
                title={<div>flow.name&nbsp;<Tag color="red">#deleted</Tag></div>}
                extra={<Button type='link' className='opeBtn'><i className='mdi mdi-undo-variant'/>undelete</Button>}>
                <Timeline>
                {
                  flow.steps.map(step=>{
                    return (
                      <Timeline.Item key={step.id}>
                        <div style={{display: 'inline-block', width: "50px"}}>
                          {step.name}
                        </div>
                        <div style={{display: 'inline-block',float: 'right'}}>
                          {step.position.join("、")}
                        </div>
                      </Timeline.Item>
                    )
                  })
                }
                </Timeline>
              </Card>
              )
          })
        }
      </Panel>
    </Collapse>
    )
  }
}
  
export default Flow
