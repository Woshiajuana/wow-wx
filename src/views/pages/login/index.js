//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Router,
    ],
    onLoad (options) {
        this.routerGetParams(options);
    },
});

