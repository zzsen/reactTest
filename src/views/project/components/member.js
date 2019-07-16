import React from 'react'
import { Popover, Table, Tag } from 'antd'
import 'antd/dist/antd.css'
import './member.scss'


class PruductList extends React.Component {
  constructor(props){
    super(props)
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '角色',
        dataIndex: 'roleInfo',
        key: 'roleInfo',
      },
      {
        title: 'position',
        dataIndex: 'positionInfo',
        key: 'positionInfo',
      },
    ]
    const members = [
      {
        id: 1,
        name: '11',
        createTime: '20190716',
        creator: 'test',
        role: 'test',
        isDelete: false,
        positions: ['11', '22', '33']
      },
      {
        id: 2,
        name: '22',
        createTime: '20190716',
        creator: 'test',
        role: 'test',
        isDelete: false,
        positions: ['11', '22', '33']
      },
      {
        id: 3,
        name: '33',
        createTime: '20190716',
        creator: 'test',
        role: 'test',
        isDelete: false,
        positions: ['11', '22', '33']
      }
    ]
    this.state={
      columns,
      members,
      id: props.id
    }
  }
  
  componentDidMount() {
    this.setState({
      id: this.state.id
    });
  }  

  log(e) {
    console.log(e);
  }

  render() {
    const dataSource = this.state.members.map(a => {
      return Object.assign(a, {
        createInfo: 'created by ' + a.creator + ' , ' + a.createTime,
        roleInfo: (
          <React.Fragment>
            <Popover
              content={a.createInfo}
              placement="left"
              trigger="hover">
              {a.role}
            </Popover>
            &nbsp;
            <Tag
              closable
              color="red"
              onClose={this.log}>已删除</Tag>
          </React.Fragment>
        ),
        positionInfo: a.positions.join(' 、 ')
      })
    })
    return (
      <Table
        dataSource={dataSource}
        columns={this.state.columns} />
    )
  }
}
  
export default PruductList
