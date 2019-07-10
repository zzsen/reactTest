import React from 'react'
import { Card } from 'antd'
import 'antd/dist/antd.css'
import './product.scss'
const { Meta } = Card

class PruductList extends React.Component {
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
    return (
      <div className="ProductList">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    )
  }
}
  
export default PruductList
