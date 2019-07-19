import React from 'react'
import { Card, Row, Col } from 'antd'
import 'antd/dist/antd.css'
import './product.scss'

const products = [
  {
    name: '111',
    id: 1,
    code: '111',
    description: '111111111'
  },
  {
    name: '222',
    id: 2,
    code: '222',
    description: '222222222'
  },
  {
    name: '333',
    id: 3,
    code: '333',
    description: '333333333'
  },
  {
    name: '444',
    id: 4,
    code: '444',
    description: '444444444'
  }
]

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
    })
  }  

  render() {
    const productComponets = products.map(a=>{
      return (
        <Card
          hoverable
          className="product"
          key={a.id}
          bordered={true}>
          <Row>
            <Col span={8} className="col-left">name：</Col>
            <Col span={16} className="col-right">col-12</Col>
          </Row>
          <Row>
            <Col span={8} className="col-left">code：</Col>
            <Col span={16} className="col-right">col-12</Col>
          </Row>
        </Card>
      )
    })
    return (
      <div className="ProductList">
        {productComponets}
      </div>
    )
  }
}
  
export default PruductList
