import React from "react";
import {Timeline} from 'antd';
import axios from 'axios';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '', //账号
            authorId: '', // 作者，所属用户ID[多作者请在描述中填充第二作者信息]
            tagId: '', // 栏目ID
            sortId: '',// 所属分类
            status: '',// 文章的模式:0为私有，1为公开，2为仅好友查看
            title: '',// 文章名称-64
            description: '',// 文章描述-128
            content: '',// 文章内容[text]
            publishDate: '',// 发布时间
            createDate: '',// 创建时间(创建未发表)
            updateDate: '',// 更新时间
            info: '',

        }
    }

    /////////////
    componentDidMount() {
        // To disabled submit button at the beginning.
        console.log("----------------------------");
        console.log(new Date());
        console.log("componentDidMount");
        console.log("----------------------------");
        // this.props.form.validateFields();
    }


    // 获取博客数据  图片 + 文字，这里应该获取的是文字数据 阅读数等
    getBlogFun = (e) => {
        // console.log(this.state.username);
        // console.log(this.state.pwd);
        // console.log(this.state.sex);
        // console.log(this.state.info);

        var url = "http://127.0.0.1:80/blogs/1";
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

                //登录失败  小于1 失败
                if (null == response.data.code < 1) {
                    alert(response.data.msg);
                    this.props.history.push("/login");
                } else {
                    //登录成功，获取到后台返回的数据，可以做缓存
                    console.log(" 登录成功" + response.data.msg);
                    this.props.history.push("/Blog");
                }

            })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('登陆异常  catch =====',);
                this.props.history.push("/login");
            });
        ;

    };

    /////////////


    render() {

        return (
            <div>
                <Timeline>
                    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="red">
                        <p>Solve initial network problems 1</p>
                        <p>Solve initial network problems 2</p>
                        <p>Solve initial network problems 3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </Timeline.Item>
                </Timeline>,
            </div>)
    }

}

export default Blog;

//TestMdEditor
