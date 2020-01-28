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
            { label: '照片', class: 'icon-zhaopian_huabanfuben', useMargin: true, url: '' },
            { label: '收藏', class: 'icon-shoucang-tianchong', useMargin: true, url: '' },
            { label: '历史', class: 'icon-3lishi', useMargin: false, url: '' },
            { label: '设置', class: 'icon-shezhi', useMargin: true, url: '' },
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
    handleMore (event) {
        console.log('更多', event);
    },
    testPromise () {
        return Promise.reject('xxx');
    }
});
