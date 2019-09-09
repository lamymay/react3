import React from "react";

class Success extends React.Component {

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

                <h1>Success</h1>

            </div>)
    }
}

export default Success;
//这里需要一个表单，输入1项目名称2类型3点击下一步4选择一个规则或者点击创建规则4.1走创建规则则展开一个模态框保存一条规则5进入看板
//跳转看板页面：1查询规则列表绘制看板2去看别人怎么设计的
