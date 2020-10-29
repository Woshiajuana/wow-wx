//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Auth,
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Clipboard,
        WowPage.wow$.mixins.Curl,
        WowPage.wow$.mixins.Jump,
    ],
    onLoad (options) {

    },
});
