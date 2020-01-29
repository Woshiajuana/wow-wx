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
        nickname: '12',
    },
    handleInput (event) {
        let data = this.inputParams(event);
        console.log('触发了 =>', data);
        console.log('触发了 =>', event);
    },
});
