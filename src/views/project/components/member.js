import React from 'react'
import { Popover, Table, Tag } from 'antd'
import 'antd/dist/antd.css'
import './member.scss'


class Member extends React.Component {
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

    const member = {
      createTime: '20190716',
      creator: 'test',
      role: 'test',
      positions: ['11', '22', '33']
    }
    let members = []
    this.state={
      member,
      columns,
      members,
      id: props.id
    }
  }
  
  componentDidMount() {
    var num = 0
    while (num<100) {
      this.state.members.push(Object.assign({
        id: num,
        name: 'user' + num,
        isDelete: num % 2 === 0
      }, this.state.member))
      num++
    }
    this.setState({
      members: this.state.members,
      id: this.state.id
    });
  }  

  log(e) {
    console.log(e)
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
            {a.isDelete&&
            <Tag
              closable
              color="red"
              onClose={this.log}>已删除</Tag>}
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
  
export default Member
