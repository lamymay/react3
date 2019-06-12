#创建一个ant Design的项目

1. 创建react项目
2. 引入ant 模块。npm install antd --save



#异常

1. Warning: Each record in table should have a unique `key` prop,


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

作者：leonC走来
链接：https://www.jianshu.com/p/8b499154e01e
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。


react规范每个数组或者迭代器中循环出来的组件或原生节点都必须添加一个唯一值的key属性，key值在此循环中唯一，以便react可以快速定位指定的组件，以此提高渲染效率








-------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
