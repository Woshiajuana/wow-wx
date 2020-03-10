//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Text,
        WowPage.wow$.mixins.Calendar,
        WowPage.wow$.mixins.Router,
        WowPage.wow$.mixins.Input,
        WowPage.wow$.mixins.Jump,
    ],
    data: {
        // prompt: '嘿嘿嘿',
    },
    onLoad(options) {
        this.calendarRender();
    },
});
