import React from 'react'
import { Card } from 'antd'
import 'antd/dist/antd.css'
import './flowCard.scss'


class FlowCard extends React.Component {
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
    return (
      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    )
  }
}
  
export default FlowCard
