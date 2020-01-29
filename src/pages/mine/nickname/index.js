//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
    ],
    data: {
        nickname: '',
    },
    handleInput (event) {
        console.log('触发了 =>', event);
    },
});
