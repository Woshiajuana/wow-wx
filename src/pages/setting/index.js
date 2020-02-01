//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Refresh,
    ],
    data: {
        arrEntry: [
            {
                label: '修改密码',
                useMargin: true,
                url: ''
            },
            {
                label: '关于我们',
                useMargin: true,
                url: ''
            },
            {
                label: '帮助',
                useMargin: false,
                url: ''
            },
            {
                label: '反馈',
                useMargin: false,
                url: ''
            },
        ],
    },
    onLoad(options) {
        console.log('首页加载 => ', options);
        console.log('首页执行wow$ =>', this.wow$);
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
    }
});
