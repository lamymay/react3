//http://127.0.0.1:8000/zero/test/click
//const host = "https://arc.monster";   //线上-VPS

const host = "http://127.0.0.1:8000"; //本地

const prefixUri = host + "/zero";

const urls = {

    //文件相关
    app_click: {
        // 打卡接口
        click: prefixUri + "/test/click/click",
    },

    menu: {
        listMenu: prefixUri + "/menus/list",
        saveMenu: prefixUri + "/menus/save",
    }
};

export default urls;
