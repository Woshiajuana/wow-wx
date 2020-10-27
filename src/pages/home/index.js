//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Auth,
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Clipboard,
    ],
    onLoad (options) {
        console.log('options => ', options);
    },
    handleTest1(){
    },
    handleTest () {
        this.authScope(this.data.auth$.CAMERA, '执行该操作需要摄像头权限').then((res) => {
            console.log('res => ', res);
        }).catch((err) => {
            console.log('err => ', err);
        });




    },
});
