import React from 'react'
import Product from './components/product'
import MoreInfo from './components/moreInfo'
import { Button, Card, Collapse, Icon, Row, Col } from 'antd'
import { withRouter } from "react-router-dom"
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
    this.setState({
      id: this.state.id
    })
  }  

  goBack() {
    this.props.history.goBack()
  }

  render() {
    //jsx样式
    const customPanelStyle = {
    }

    const title = (
      <div className="detailTitle">
        <Button
          className="backBtn"
          onClick={()=>this.goBack()}
          title='goBack'>
          <i className='mdi mdi-arrow-left-bold-outline'></i>
        </Button>
        <span>text</span>
      </div>
    )

    return (
      <div className="ProjectDetail">
        {/* 基本信息 */}    
        <Card
          size="small"
          bordered={false}
          extra={
            <div style={{width: '80px'}}>
              <div className='deleteBtn hoverBtn' style={{float: 'right'}}>
                <i className='mdi mdi-trash-can-outline'></i>
                <div>delete</div>
              </div>
            </div>
          }
          title={title}>
          <Collapse
            bordered={false}
            defaultActiveKey={['basicDetail']}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
            <Panel
              className="detailPanel"
              header="basicDetail"
              key="basicDetail"
              style={customPanelStyle}>
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
            <Panel
              className="detailPanel"
              header="productList"
              key="productList">
              <Product></Product>
            </Panel>
            <Panel
              className="detailPanel"
              header="panel"
              key="moreInfo">
              <MoreInfo></MoreInfo>
            </Panel>
          </Collapse>
        </Card>
      </div>
    )
  }
}
  
export default withRouter(Detail)
