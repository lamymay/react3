import React from "react";
import {Link} from "react-router-dom";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    aid: '1',
                    title: '商品标题1'
                }, {
                    aid: '2',
                    title: '商品标题2'
                }
                , {
                    aid: '3',
                    title: '商品标题3'
                }
                , {
                    aid: '4',
                    title: '商品标题4'
                }

            ]
        }
    }


    componentDidMount() {
        //获取列表数据
        // this.getUsers();

    }


    getUsers = () => {

    };


    //get?key=value 这样的传值需要,,http://localhost:3000/ProductDetails?pid=2
    // 1注意， 路由中就是普通路由的配置
    //2

    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (<div>

            <h2>GET Product-动态传值测试</h2>

            <ul>
                {this.state.list.map((value, key) => {
                    return <li key={key}>
                        <Link to={`/ProductDetails?pid=${value.aid}`}>  {value.title}
                        </Link>


                    </li>

                })}
            </ul>


        </div>)
    }
}
export default Product;
