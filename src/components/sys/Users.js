import React from "react";
import "antd/dist/antd.css";
import axios from 'axios';
import {
    Table,
    Card,
    Button,
    Modal,
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    List,
    Checkbox,
    AutoComplete,
}
    from
        'antd';

// import ReactDOM from 'react-dom'
// import Connection from '../common/Connection';
//引入antd，本页面主要是对list数据做渲染
class Users extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }


    getInitialState() {
        return {
            modal2Visible: false,
        };
    }

    setModal2Visible(modal2Visible) {
        this.setState({modal2Visible});
    }


    componentDidMount() {
        //获取列表数据
        this.getUsers();

    }

    // hasErrors(fieldsError) {
    //     return Object.keys(fieldsError).some(field => fieldsError[field]);
    // }


    //在密码框中点了回车就直接发请求登陆
    //login
    getUsers = () => {
        var port = 80;
        var url = "http://127.0.0.1:" + port + "/sys/users/page";
        console.log("######################################");
        console.log(url);
        console.log("######################################");
        let user = {};
        axios.post(url, user)
            .then(response => {
                console.log("response  then ==获取到后台返回的数据");
                console.log(response.data);
                //登录失败
                if (null == response.data.data) {
                    alert(response.data.msg);
                }
                //登录成功，获取到后台返回的数据，可以做缓存
                var fromDb = response.data.data;
                console.log(fromDb);
                //赋值
                this.setState({users: fromDb});
                console.log(this.state.users);

            })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('异常  catch =====',);

            });

    };

    //更新用户
    updateUser = (e) => {
        console.log("uuuuuuuuuuuu");
     /*   var id = 1;
        var url = "http://127.0.0.1:80/sys/users/" + id;
        console.log(url);
        // let user = {
        //     'identifier': this.state.username,
        //     "credential": this.state.pwd,
        //     "identifierType": 1
        // };

        axios.get(url).then(response => {
            console.log("111111111111111111111111response  then ==获取到后台返回的数据");
            console.log(response.data);
            //登录失败
            if (null == response.data.data) {
                alert(response.data.msg);
            }
            //登录成功，获取到后台返回的数据，可以做缓存

        })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('登陆异常  catch =====',);

            });*/

    };


    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        //定义表头，一般放在render()中
        const columns = [
            //列名称--数据源的字段名
            {
                key: 'id',
                title: '测试合并',
                render: (text, record) => (
                    <span>
                       {record.nickname}--
                        {record.avatar}>
                        </span>
                )
            },
            {
                key: 'nickname',
                title: '昵称',
                dataIndex: 'nickname',
                width: 150
            },
            {
                key: 'avatar',
                title: '标识',
                dataIndex: 'avatar'
            },
            {
                key: 'state',
                title: '启用状态',
                dataIndex: 'state'
            },
            {
                key: 'createDate',
                title: '创建时间',
                dataIndex: 'createDate'
            },
            {
                key: 'updateDate',
                title: '更新时间',
                dataIndex: 'updateDate'
            }
        ];
        //////////////////////

        return (<div>

            <Card title={"基础表格"}>
                <Button type="primary" onClick={this.updateUser}>测试 primary与后台交互</Button>
                <Button type="dashed" onClick={this.updateUser}>测试 dashed与后台交互</Button>
                <Button type="danger" onClick={this.updateUser}>测试 danger与后台交互</Button>

                <Button type="primary" onClick={() => this.setModal2Visible(true)}>显示垂直居中的对话框</Button>

                <Modal
                    title="垂直居中的对话框"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modal2Visible}
                    // onOk={() => this.setModal2Visible(false)}
                    //  onCancel={() => this.setModal2Visible(false)}
                >

                    <p>对话框的内容</p>
                    <Form layout="inline" onSubmit={this.updateUser}>
                        <Form.Item> <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                           placeholder="Username"/> </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="Password"/> </Form.Item>
                        <Form.Item> <Button type="primary" htmlType="submit"> Log in </Button> </Form.Item>
                    </Form>


                </Modal>

                {/*columns:指定表头          dataSource:指定数据源          borderd:加边框*/}
                {/*<Table  rowKey={record=>record.id} columns={columns} dataSource={this.state.users} bordered>*/}
                <Table
                    rowKey={record => record.id}
                    columns={columns}
                    dataSource={this.state.users}
                    pageSize={10}
                    bordered>
                </Table>
            </Card>
        </div>)
    }
}


export default Users;
