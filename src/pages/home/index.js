//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Text,
        // WowPage.wow$.mixins.Refresh,
    ],
    data: {
        // prompt: '嘿嘿嘿',
    },
    onLoad(options) {
        console.log('首页加载 => ', options);
        console.log('首页执行wow$ =>', this.wow$);
    },
    handleRefresh (event) {
        console.log('handleRefresh', event);
        let { callback } = event.detail;
        callback();
    },
    handleLoad (event) {
        console.log('handleLoad', event);
        let { callback } = event.detail;
        callback();
    },
    handleTap () {
        let { Modal } = this.wow$.plugins;
        // this.modalToast('11111');
        // Modal.toast(1);
        // console.log(new Promise(()=> {}).toast);

        this.testPromise().toast();
    },
    testPromise () {
        return Promise.reject('xxx');
    },
});
