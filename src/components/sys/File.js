import React from "react";
import {Upload, message, Button, Icon} from 'antd';

class File extends React.Component {

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


    const
    props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const
    props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    render() {
        return (<div>

            <h1>欢迎|WELCOME File</h1>
            <h1>upload file</h1>
            <h2>upload file</h2>
            <h3>upload file</h3>
            <h4>upload file</h4>
            <h5>upload file</h5>
            <h6>upload file</h6>
            <h7>upload file</h7>
            <hr/>

            <Upload>
                <Button>
                    <Icon type="upload"/> Click to Upload
                </Button>
            </Upload>

        </div>)
    }

}

export default File;
