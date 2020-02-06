//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Input,
    ],
    data: {
        arrData: [
            { label: '我的粉丝', active: true, data: 10 },
            { label: '我的关注', active: false, data: 20 },
        ],
    },
    handleTabSwitch (event) {
        let { index } = this.inputParams(event);
        let { arrData } = this.data;
        arrData.forEach((item, i) => item.active = index === i);
        this.setData({ arrData });
    },
});
