//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Refresh,
        WowPage.wow$.mixins.Input,
        WowPage.wow$.mixins.Router,
        WowPage.wow$.mixins.Jump,
    ],
    onLoad () {
        this.handleRefresh();
    },
    getReqUrlOrOption () {
        let { Http } = this.wow$.plugins;
        return { url: Http.API.REQ_NOTICE_LIST, options: { nature: 'PRIVATE'} };
    },
});
