import React from "react";
import { Modal, Button } from 'antd';
import { Popconfirm, Icon } from 'antd';

//Notification通知提醒框
// 全局展示通知提醒信息。
//
// 何时使用#
// 在系统四个角显示通知提醒信息。经常用于以下情况：
//
// 较为复杂的通知内容。
//
// 带有交互的通知，给出用户下一步的行动点。
//
// 系统主动推送。
import {  notification } from 'antd';

class ModalBase extends React.Component {

    constructor(props) {
        super(props);
        this.state = { visible: false}
    }

    /////////////

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    /////////////


    render() {
        const openNotification = () => {
            notification.open({
                message: 'Notification Title',
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        };



        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>

            <hr/>
                <Popconfirm
                    title="Are you sure？"
                    icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                >
                    <a href="#">Delete</a>
                </Popconfirm>,

                <hr/>


                <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
                    <a href="#">Delete</a>
                </Popconfirm>,
                mountNode,
                <hr/>

                <Button type="primary" onClick={openNotification}>
                    Open the notification box
                </Button>,
                mountNode,
            </div>)
    }

}

export default ModalBase;
