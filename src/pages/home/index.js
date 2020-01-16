//index.js
import './index.json'
import './index.scss'
import './index.wxml'
import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
    ],
    onLoad(options) {
        console.log('首页加载 => ', options);
        console.log('首页执行wow$ =>', this.wow$);
    },
    handleTap () {
        let { Modal } = this.wow$.plugins;
        // this.Modal.toast('11111');
        // Modal.toast(1);
    },
});
