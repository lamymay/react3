import React from "react";

class ProjectTest extends React.Component {

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


    render() {
        return (
            <div>

                <h1>欢迎|Project</h1>
                <h1>欢迎|Project</h1>
                <h1>欢迎|Project</h1>
                <h1>欢迎|Project</h1>
                <h1>欢迎|Project</h1>

            </div>)
    }
}

export default ProjectTest;
