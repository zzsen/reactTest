import React from 'react'
import { Button, Card, Collapse, Icon } from 'antd'
import 'antd/dist/antd.css'
import './detail.scss'
const { Panel } = Collapse

class Detail extends React.Component {
  constructor(props){
    super(props)
    this.state={
      id: props.id
    }
  }
  
  componentDidMount() {
    console.log(this.state.id)
    this.setState({
      id: this.state.id
    });
  }  

  render() {
    const customPanelStyle = {
      background: '#f7f7f7',
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      overflow: 'hidden',
    };
    const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `;
    return (
      <div className="ProjectDetail">
        {/* 基本信息 */}    
        <Card size="small"
          title={<span><Button style={{float: 'left'}}>More</Button><span style={{margin: 0}}>text</span></span>}
          extra={<Button style={{float: 'left'}}>More</Button>}>
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
            <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Card>
      </div>
    )
  }
}
  
export default Detail
