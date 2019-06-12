import React from 'react';
import {Modal, Button} from 'antd';

class UserUpdate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    getInitialState() {
        return {
            modal1Visible: false,
            modal2Visible: false,
        };
    }

    setModal1Visible(modal1Visible) {
        this.setState({modal1Visible});
    }

    setModal2Visible(modal2Visible) {
        this.setState({modal2Visible});
    }


    render() {
        return (
            <div>
                <Button type="primary" onClick={() => this.setModal1Visible(true)}>显示距离顶部 20px 的对话框</Button>
                <Modal
                    title="距离顶部 20px 的对话框"
                    style={{top: 20}}
                    visible={this.state.modal1Visible}
                    onOk={() => this.setModal1Visible(false)}
                    onCancel={() => this.setModal1Visible(false)}
                >
                    <p>对话框的内容</p>
                    <p>对话框的内容</p>
                    <p>对话框的内容</p>
                </Modal>
                <Button type="primary" onClick={() => this.setModal2Visible(true)}>显示垂直居中的对话框</Button>

                <Modal
                    title="垂直居中的对话框"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modal2Visible}
                    onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}
                >
                    <p>对话框的内容</p>
                    <p>对话框的内容</p>
                    <p>对话框的内容</p>
                </Modal>
            </div>
        );
    }

}


export default UserUpdate;
