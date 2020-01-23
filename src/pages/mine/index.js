//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Refresh,
        WowPage.wow$.mixins.Input,
    ],
    data: {
        arrEntry: [
            { label: '照片', icon: 'icon-zhaopian_huabanfuben', useMargin: true, url: '' },
            { label: '收藏', icon: 'icon-shoucang-tianchong', useMargin: true, url: '' },
            { label: '历史', icon: 'icon-3lishi', useMargin: false, url: '' },
            { label: '设置', icon: 'icon-shezhi', useMargin: true, url: '' },
        ]
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
    handleSelect (event) {
        console.log('点了外面', event);
    },
});
