//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Input,
        // WowPage.wow$.mixins.Refresh,
    ],
    data: {
        arrTab: [
            { label: '推荐', active: true },
            { label: '关注', active: false },
        ],
    },
    handleTabSwitch (event) {
        let { index } = this.inputParams(event);
        let { arrTab } = this.data;
        arrTab.forEach((item, i) => item.active = index === i);
        this.setData({ arrTab });
    },
});
