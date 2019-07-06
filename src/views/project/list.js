import React from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'
import './list.css'

class List extends React.Component {
  constructor(props){
    super(props)
    const dataSource = [
      {
        key: '1',
        name: props.type + "111",
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: props.type + "222",
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ]
    
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
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
      dataSource
    }
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
