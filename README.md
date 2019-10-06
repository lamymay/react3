#创建一个ant Design的项目




1. 创建react项目
2. 引入ant 模块  npm install antd --save

-----------





2. 查看已经安装过的node包
npm ls -g --depth 0
webpack 版本查询
npm info webpack
安装指定版本
npm install webpack@3.0.0 -g 
安装最新版本
npm install webpack -g





如何在 ant 的table中实现图片的渲染


<Table
       selectHandle={false}
       onCtrlClick={ this.tableAction }
       header={this.tableHeader()}
       pagination={ true }
       scroll = {{y:450}}
       pageSize={10}
       getpage={this.getpage}
       currentPage={this.state.currentPage}
       data={this.state.dataSource}
       checkChang={this.checkChang} />
--------------------- 
tableHeader = () => {
      return [{
          dataIndex: '',
          title: 'Logo',
          width: 150,
          key : 'image',
          render:(record) => {
                  return <img src={record.image} alt="" style={{width:'5    0px',height:'50px',borderRadius:'50%'}}/>
          }
      },{
          dataIndex: 'name',
          title: '名称',
          width: 150,
          key : 'name'
      },{
          dataIndex: 'label',
          title: '标签',
          width: 150,
          key : 'label'
      },{
          dataIndex: 'collectCount',
          title: '关注数',
          width: 150,
          key : 'collectCount'
      }, {
          dataIndex: 'topicCount',
          title: '帖子数',
          width: 150,
          key : 'topicCount'
      },{
          dataIndex: 'inTime',
          title: '创建时间',
          width: 150,
          key : 'inTime'
      }]
  }
--------------------- 
利用table 中 render的属性，，，将LOGO在tableHeader中render return一个img 标签，并将src={ record.image } 
图片就正确的渲染到你的table中了。。拿走 不谢～～～





Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of CtrlGrid. See https://fb.me/react-warning-keys for more information.

链接：https://www.jianshu.com/p/8b499154e01e


react规范每个数组或者迭代器中循环出来的组件或原生节点都必须添加一个唯一值的key属性，key值在此循环中唯一，以便react可以快速定位指定的组件，以此提高渲染效率








-------------------------------------------------

I had the same problem:

module not found: Error: Can't resolve 'axios' in '

I realized that axios folder in not found in the node_module folder of my project. I had already used npm install --save axios but it was still not found in my local node-module folder.

This is how I solved this issue. I looked for some other react projects I had already done and copied the axios folder in the node_module folder of that old project. I later pasted the copied axios folder into the node_module folder of my current project and the problem varnished.
