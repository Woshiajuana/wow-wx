//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Router,
        WowPage.wow$.mixins.User,
    ],
    data: {
        src: '',
    },
    onLoad (options) {
        this.routerGetParams(options);
        this.userGet().then(this.assignmentData.bind(this)).null();
    },
    assignmentData () {
        let { params$, user$ } = this.data;
        let { AccessToken } = user$;
        let link = params$.link || params$.Link;
        let title = params$.title || params$.label || params$.Name || '内容详情';
        wx.setNavigationBarTitle({ title });
        this.setData({ src: link.replace('ACCESSTOKEN', AccessToken) });
    },
});

