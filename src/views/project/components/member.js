import React from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'
import './moreInfo.scss'


class PruductList extends React.Component {
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
    const members = [
      {
        id: 1,
        name: '11',
        createTime: '20190716',
        creator: 'test',
        isDelete: false
      },
      {
        id: 2,
        name: '22',
        createTime: '20190716',
        creator: 'test',
        isDelete: false
      },
      {
        id: 3,
        name: '33',
        createTime: '20190716',
        creator: 'test',
        isDelete: false
      }
    ]
    this.state={
      members,
      id: props.id
    }
  }
  
  componentDidMount() {
    this.setState({
      id: this.state.id
    });
  }  
  render() {
    const dataSource = this.state.members.map(a => {
      return Object.assign(a, {
        createInfo: 'created by ' + a.creator + ' , ' + a.createTime
      })
    })
    return (
      <Table
        dataSource={this.state.dataSource}
        columns={this.state.columns} />
    )
  }
}
  
export default PruductList
