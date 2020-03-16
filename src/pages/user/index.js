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
    onLoad (options) {
        this.routerGetParams(options);
        this.reqUserInfo();
    },
    handleRefresh (callback) {
        this.reqUserInfo(callback);
    },
    reqUserInfo (callback) {
        let { _id: id } = this.data.params$;
        let { Http } = this.wow$.plugins;
        Http(Http.API.REQ_USER_INFO, {
            id,
        }, {
            loading: false,
        }).then((res) => {

        }).toast().finally(() => {
            typeof callback === 'function' && callback();
        });
    }
});
