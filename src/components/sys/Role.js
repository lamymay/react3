import React from "react";
import "antd/dist/antd.css";
import axios from 'axios';
import {
    Table,
    Card,
    // Button,
    // Modal,
    // Form,
    // Input,
    // Tooltip,
    // Icon,
    // Cascader,
    // Select,
    // Row,
    // Col,
    // List,
    // Checkbox,
    // AutoComplete,
}
    from
        'antd';

// import ReactDOM from 'react-dom'
// import Connection from '../common/Connection';
//引入antd，本页面主要是对list数据做渲染
class Role extends React.Component {


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
        var url = "http://127.0.0.1:" + port + "/sys/roles/page";
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


    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        //定义表头，一般放在render()中
        const columns = [
            //列名称--数据源的字段名
            {
                key: 'id',
                title: 'id',
                render: (text, record) => (
                    <span>
                       {record.id}
                        </span>
                )
            },
            {
                key: 'name',
                title: '角色名称',
                dataIndex: 'name',
                width: 150
            },
            {
                key: 'root',
                title: 'root',
                dataIndex: 'root'
            },
            {
                key: 'state',
                title: 'state',
                dataIndex: 'state'
            }, {
                key: 'note',
                title: 'note',
                dataIndex: 'note'
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

            <Card title={"角色信息"}>
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

export default Role;
