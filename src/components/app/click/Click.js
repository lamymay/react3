import React from 'react';
import axios from "axios";
import urls from '../../../config/urls.js';

class Click extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display_message: null,

            type: null,
        }
    }


    // 页面上需要一个按钮 点击后发个POST请求

    getFile = (code) => {


        let url = urls.app_click.click;
        console.log(url);
        let req = {
            "location": "测试"
        };
        axios.post(url, req).then(response => {
            console.log(response);
            console.table(response.data);
            console.log("-----");
            console.log(response.data.data);
            console.log(response.headers);
            // console.log(response.data.message);
            // this.setState({
            //     display_message: response.data.data,
            // });


        })
    };
    clickCheckIn = (e) => {
        this.getFile(this.state.code);
    };


    render() {
        return (<div>

            <h1>欢迎|WELCOME</h1>

            <button onClick={this.clickCheckIn}>打卡</button>

            <h2>
                {this.state.display_message}
            </h2>
        </div>)
    }
}

export default Click;
