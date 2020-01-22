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
            { label: '照片', class: 'icon-zhaopian_huabanfuben', url: '' },
            { label: '收藏', class: 'icon-shoucang-tianchong', url: '' },
            { label: '历史', class: 'icon-3lishi', url: '' },
            { label: '设置', class: 'icon-shezhi', url: '' },
        ]
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
