import React from "react";
// import ReactDOM from 'react-dom'
import axios from 'axios';
//引入antd，本页面主要是对list数据做渲染


// import {Form, Icon, Input, Button, Checkbox,List,Card} from 'antd';
// import "antd/dist/antd.css";

//官方 axios 文档 https://www.kancloud.cn/yunye/axios/234845
//https://segmentfault.com/a/1190000015261229  三种表单提交，需要注意
//1、Content-Type: application/json
// import axios from 'axios'
// let data = {"code":"1234","name":"yyyy"};
// axios.post(`${this.$url}/test/testRequest`,data)
// .then(res=>{
//     console.log('res=>',res);
// })
// clipboard.png
//
// 2、Content-Type: multipart/form-data
// import axios from 'axios'
// let data = new FormData();
// data.append('code','1234');
// data.append('name','yyyy');
// axios.post(`${this.$url}/test/testRequest`,data)
// .then(res=>{
//     console.log('res=>',res);
// })
// clipboard.png
//
// 3、Content-Type: application/x-www-form-urlencoded
// import axios from 'axios'
// import qs from 'Qs'
// let data = {"code":"1234","name":"yyyy"};
// axios.post(`${this.$url}/test/testRequest`,qs.stringify({
//     data
// }))
// .then(res=>{
//     console.log('res=>',res);
// })


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '', //账号
            pwd: '', // 密码
            pwdConfirm: '', // 确认密码
            type: 'worker', // 用户类型 默认求职者
            sex: 3,
            info: '',

        }
    }


    //   hasErrors=(fieldsError)=> {
    //     return Object.keys(fieldsError).some(field => fieldsError[field]);
    // }
    componentDidMount() {
        // To disabled submit button at the beginning.
        console.log("----------------------------");
        console.log(new Date());
        console.log("componentDidMount");
        console.log("----------------------------");
        // this.props.form.validateFields();
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    };

    handlePwd = (e) => {
        this.setState({
            pwd: e.target.value
        });
    };

    handleSex = (e) => {
        console.log("测试处理性别");
        this.setState({
            sex: e.target.value
        })
    };

    handleInfo = (e) => {
        this.setState({
            info: e.target.value
        })
    };

    keyUpFun = (e) => {
        console.log(e.keyCode === 13);
        if (e.keyCode === 13) {
            this.loginFun(e);
        }

    };


    //在密码框中点了回车就直接发请求登陆
    //login
    loginFun = (e) => {
        console.log(this.state.username);
        console.log(this.state.pwd);
        console.log(this.state.sex);
        console.log(this.state.info);

        var url = "http://127.0.0.1:8001/test/login";
        console.log(url);
        let user = {
            'identifier': this.state.username,
            "credential": this.state.pwd,
            "identifierType": 1
        };

        axios.post(url, user)
            .then(response => {
                console.log("response  then ==获取到后台返回的数据");
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

            });
        ;

    };


    // const {
    //     getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    // } = this.props.form;

    // const userNameError = isFieldTouched('userName') && getFieldError('userName');
    // const passwordError = isFieldTouched('password') && getFieldError('password');

    render() {
        return (
            <div>
                <h2>注册页面</h2>
                <hr/>

                名称: <input type='text' value={this.state.username} onChange={this.handleUsername}/><br/>
                密码: <input type='text' value={this.state.pwd} onChange={this.handlePwd} onKeyUp={this.keyUpFun}/><br/>

                <input type='radio' value='1' checked={this.state.sex === 1} onChange={this.handleSex}/>男
                <input type='radio' value='2' checked={this.state.sex === 2} onChange={this.handleSex}/>女
                <input type='radio' value='3' checked={this.state.sex === 3} onChange={this.handleSex}/>保密 <br/>
                <textarea value={this.state.info} onChange={this.handleInfo}/><br/>

                <button onClick={this.loginFun}>测试 与后台交互</button>

                <br/>
                <br/>
                <h3>账号：{this.state.username}-- 密码：{this.state.pwd}-- </h3>
            </div>
        );
    }
}

export default Register;



