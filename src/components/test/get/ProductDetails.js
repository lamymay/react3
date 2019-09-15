import React from "react";
import url from 'url';

class ProductDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    //生命周期函数中获取 GET传值
    componentDidMount() {
        console.log(this.props.location.search);

        //在react中使用 url 模块， 需要安装
       console.log( url.parse(this.props.location.search,true));

        var pid = url.parse(this.props.location.search, true).query;
        console.log(pid);
    }


    getUsers = () => {

    };


    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (<div>
            <h2>ProductDetails详情</h2>
        </div>)
    }
}
export default ProductDetails;
