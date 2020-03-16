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
        WowPage.wow$.mixins.Validate,
        WowPage.wow$.mixins.User,
    ],
    data: {
        objUser: '',
    },
    onLoad (options) {
        this.routerGetParams(options);
        this.reqUserInfo();
        this.userGet().null();
    },
    getReqUrlOrOption () {
        let { Http } = this.wow$.plugins;
        let { _id: user } = this.data.params$;
        return { url: Http.API.REQ_PHOTO_LIST, options: { user } };
    },
    handleRefresh (callback) {
        this.reqUserInfo(callback);
        this.reqDataList();
    },
    reqUserInfo (callback) {
        let { _id: id } = this.data.params$;
        let { Http } = this.wow$.plugins;
        Http(Http.API.REQ_USER_INFO, {
            id,
        }, {
            loading: false,
        }).then((res) => {
            this.setData({ objUser: res });
            wx.setNavigationBarTitle({ title: res.nickname || res.nickName });
        }).toast().finally(() => {
            this.reqDataList();
            typeof callback === 'function' && callback();
        });
    },
});
