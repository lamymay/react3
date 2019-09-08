import React from "react";
import ReactDOM from 'react-dom'
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import footnote from 'markdown-it-footnote'
import deflist from 'markdown-it-deflist'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import tasklists from 'markdown-it-task-lists'

//网络请求
import axios from 'axios';

// import hljs from 'highlight.js'
// import 'highlight.js/styles/atom-one-light.css'
// import './index.less';
// import axios from 'axios';
// import 'highlight.js/styles/github.css'

const MOCK_DATA = "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it.";
export default class TestMdEditor extends React.Component {
    mdEditor = null;
    mdParser = null;


    constructor(props) {
        super(props);
        // initial a parser
        this.mdParser = new MarkdownIt({
            html: true,
            linkify: true,
            typographer: true,
            highlight: function (str, lang) {
                // if (lang && hljs.getLanguage(lang)) {
                //     try {
                //         return hljs.highlight(lang, str).value
                //     } catch (__) {}
                // }
                return '' // use external default escaping
            }
        })
            .use(emoji)
            .use(subscript)
            .use(superscript)
            .use(footnote)
            .use(deflist)
            .use(abbreviation)
            .use(insert)
            .use(mark)
            .use(tasklists, {enabled: this.taskLists});
        this.renderHTML = this.renderHTML.bind(this)
    }


    //编辑器有变化的话执行
    handleEditorChange({html, text}) {
        console.log("html 是md 输入框中文本转换为html的文本---text 是md 输入框中的文本");
        console.log(html);
        console.log("---------------------");

        //text 是md 输入框中的文本
        console.log(text);
    }

    //上传图片
    handleImageUpload(file, callback) {

        console.log(file);
        console.log(callback);
        const reader = new FileReader();
        console.log(reader);
        // reader.onload = () => {
        //     // const convertBase64UrlToBlob = (urlData) => {
        //     //     let arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1]
        //     //     let bstr = atob(arr[1]);
        //     //     let n = bstr.length;
        //     //     let u8arr = new Uint8Array(n);
        //     //     while (n--) {
        //     //         u8arr[n] = bstr.charCodeAt(n)
        //     //     }
        //     //     return new Blob([u8arr], {type: mime})
        //     };
        //     const blob = convertBase64UrlToBlob(reader.result);
        //     setTimeout(() => {
        //         // setTimeout 模拟异步上传图片
        //         // 当异步上传获取图片地址后，执行calback回调（参数为imageUrl字符串），即可将图片地址写入markdown
        //         callback('https://avatars0.githubusercontent.com/u/21263805?s=40&v=4')
        //     }, 1000)
        // };
        // reader.readAsDataURL(file)
    }


    //输入文本后 异步渲染Markdown
    renderHTML(text) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.mdParser.render(text))
            }, 200)
        })
    }

    // handleGetMdValue = () => {
    //     this.mdEditor && alert(this.mdEditor.getMdValue())
    // }

    // handleGetHtmlValue = () => {
    //     this.mdEditor && alert(this.mdEditor.getHtmlValue())
    // }



    //创建文章
    crateArticleFun = (e) => {
        // console.log(this.state.username);
        var url = "http://arc.com/blogs/1";
        console.log(url);
        let user = {
            'identifier': this.state.username,
            "credential": this.state.pwd,
            "identifierType": 1
        };

        axios.post(url, user)
            .then(response => {
                console.log("response  then ==获取到后台返回的数据");
                console.log(response.data);

                //登录失败  小于1 失败
                if (null == response.data.code < 1) {
                    alert(response.data.msg);
                    this.props.history.push("/login");
                } else {
                    //登录成功，获取到后台返回的数据，可以做缓存
                    console.log(" 登录成功" + response.data.msg);
                    this.props.history.push("/Blog");
                }

            })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('登陆异常  catch =====',);
                this.props.history.push("/login");
            });
        ;

    };



    //-----------------------------------------------------------------------------
    //react渲染DOM的节点
    render() {
        return (
            <div>

                <MdEditor
                    ref={node => this.mdEditor = node}
                    value={MOCK_DATA}
                    style={{height: '400px'}}
                    renderHTML={this.renderHTML}
                    config={{
                        view: {
                            menu: true,
                            md: true,
                            html: true
                        },
                        imageUrl: 'https://octodex.github.com/images/minion.png'
                    }}
                    onChange={this.handleEditorChange}
                    onImageUpload={this.handleImageUpload}
                />

            </div>
        )
    }
}
