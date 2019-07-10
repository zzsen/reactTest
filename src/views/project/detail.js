import React from 'react'
import Product from './product'
import { Button, Card, Collapse, Icon, Row, Col } from 'antd'
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
    }

    const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `

    const title = (
      <div className="detailTitle">
        <Button className="backBtn">More</Button>
        <span>text</span>
      </div>
    )

    return (
      <div className="ProjectDetail">
        {/* 基本信息 */}    
        <Card size="small"
          bordered={false}
          title={title}>
          <Collapse
            bordered={false}
            defaultActiveKey={['basicDetail']}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
            <Panel header="basicDetail" key="basicDetail" style={customPanelStyle}>
              <Row type="flex" justify="start">
                <Col span={3} className="col-left">col-4：</Col>
                <Col span={8} className="col-right">col-4</Col>
                <Col span={3} className="col-left">col-4：</Col>
                <Col span={8} className="col-right">col-4</Col>
              </Row>
              <Row type="flex" justify="start">
                <Col span={3} className="col-left">col-4：</Col>
                <Col span={8} className="col-right">col-4</Col>
                <Col span={3} className="col-left">col-4：</Col>
                <Col span={8} className="col-right">col-4</Col>
              </Row>
            </Panel>
            <Panel header="productList" key="2" style={customPanelStyle}>
              <Product></Product>
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
