import React from 'react'
import { Button ,Table } from 'antd'
import { Link } from "react-router-dom"
import 'antd/dist/antd.css'
import './list.css'

class List extends React.Component {
  constructor(props){
    super(props)
    const columns = [
      {
        title: '姓名',
        dataIndex: 'nameLink',
        key: 'nameLink',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ]

    this.state={
      columns,
      type: props.type,
      dataSource: []
    }
  }
  
  componentDidMount() {
    console.log(this.state.type)
    const data = [
      {
        key: '1',
        id: '1',
        name: this.state.type + "111",
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        id: '2',
        name: this.state.type + "222",
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ]

    const dataSource = data.map(a=>{
      return Object.assign(a,{
        // nameLink: (<Button type="link" href={'#/project/'+a.id}>{a.name}</Button>)
        nameLink: (<Button type="link"><Link to={'/project/'+a.id}>{a.name}</Link></Button>)
      })
    })
    
    this.setState({
      dataSource
    });
  }  

  render() {
    return (
      <div className="ProjectList">
        <Table
          dataSource={this.state.dataSource}
          columns={this.state.columns} />
      </div>
    )
  }
}
  
export default List
