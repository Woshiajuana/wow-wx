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
    handleMore (event) {
        this.modalActionSheet([
            '编辑',
            '删除',
        ]).then(({ tapIndex }) => {
            console.log(tapIndex);
        }).null();
    },
});
