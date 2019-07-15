import React from 'react'
import Product from './components/product'
import { Button, Card, Collapse, Icon, Row, Col, Tabs } from 'antd'
import { withRouter } from "react-router-dom"
import 'antd/dist/antd.css'
import './detail.scss'
const { Panel } = Collapse
const { TabPane } = Tabs

class Detail extends React.Component {
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

  goBack() {
    this.props.history.goBack()
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
        <Button className="backBtn" onClick={()=>this.goBack()}>More</Button>
        <span>text</span>
      </div>
    )

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
            </Panel>
          </Collapse>
        </Card>
      </div>
    )
  }
}
  
export default withRouter(Detail)
