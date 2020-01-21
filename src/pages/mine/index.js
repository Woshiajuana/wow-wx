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
            { label: '照片', class: '', useMargin: false },
            { label: '收藏', class: '', useMargin: false },
            { label: '历史', class: '', useMargin: false },
            { label: '设置', class: 'icon-shezhi', useMargin: false },
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
