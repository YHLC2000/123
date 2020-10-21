import React, { useState } from 'react';
import './App.css';
import { Table, Radio, Divider, Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import 'antd/dist/antd.css'



// 模态框
const { Option } = Select;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',
    name: record.name,
  }),
};

export default class APP extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {

          name: '张三',
          age: 32,
          address: '2111',
        },
        {

          name: '李四',
          age: 42,
          address: '2133',
        },
      ]
    }
    this.name = React.createRef();
    this.age = React.createRef()
    this.address = React.createRef()
    this.handleClick = this.handleClick.bind(this)
  }
  columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '学籍',
      dataIndex: 'address'
    }
  ]
  state = { visible: false };
  show = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  handleClick() {
    this.setState({
      visible: false,
    });
    var name = this.name.current.props.value
    var age = this.age.current.props.value
    var address = this.address.current.props.value
    const app = {
      name: name,
      age: age,
      address: address
    }
    let a = this.state.data.concat(app)
    this.setState({
      data: a
    }, () => {
      console.log(this.state.data)
    })
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.show}>
          添加
        </Button>
        <Table
          columns={this.columns}
          dataSource={this.state.data}
        />
        <Drawer
          title="学生表单"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}

          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                取消
              </Button>
              <Button onClick={this.handleClick} type="primary">
                确定
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="名字"
                >
                  <Input placeholder="名字" ref={this.name}  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="age"
                  label="年龄"
                >
                  <Input placeholder="年龄" ref={this.age} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="address"
                  label="学籍"
                >
                  <Input placeholder="学籍" ref={this.address} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </div>
    )
  }
}



