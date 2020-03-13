//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Router,
    ],
    data: {
        objData: '',
    },
    onLoad (options) {
        this.routerGetParams(options);
        this.reqNoticeInfo();
    },
    reqNoticeInfo () {
        let { params$ } = this.data;
        let { Http } = this.wow$.plugins;
        Http(Http.API.REQ_NOTICE_INFO, {
            id: params$._id,
        }).then((res) => {
            this.setData({ objData: res });
        }).toast();
    },
});
