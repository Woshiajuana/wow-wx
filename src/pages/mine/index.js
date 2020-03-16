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
        arrEntry: [
            { label: '照片', icon: 'icon-zhaopian_huabanfuben', useMargin: true, url: 'photo_index' },
            { label: '收藏', icon: 'icon-shoucang-tianchong', useMargin: true, url: 'collect_index' },
            { label: '历史', icon: 'icon-3lishi', useMargin: false, url: 'history_index' },
            { label: '设置', icon: 'icon-shezhi', useMargin: true, url: 'setting_index' },
        ],
        objNotice: { label: '消息', url: 'notice_index' },
        objInfo: {
            numFollower: { value: 0, label: '粉丝', url: 'friend_index', key: 'objInfo.numFollower' },
            numFollowing: { value: 0, label: '关注', url: 'friend_index', key: 'objInfo.numFollowing' },
            numPhoto: { value: 0, label: '照片', url: 'photo_index', key: 'objInfo.numPhoto' },
        },
    },
    onShow () {
        this.handleRefresh();
    },
    handleRefresh (callback) {
        this.userGet().then(() => {
            this.reqUserInfo(callback);
        }).catch(() => {
            callback && callback();
        });
    },
    reqUserInfo (callback) {
        let { Http } = this.wow$.plugins;
        Http(Http.API.REQ_USER_INFO, {}, {
            loading: false,
        }).then((res) => {
            return this.userUpdate(res);
        }).then(() => {
            return this.userGet();
        }).then(() => {
            let { objInfo, user$ } = this.data;
            this.validateAssignment(this, user$, objInfo, 'objInfo');
        }).toast().finally(() => {
            typeof callback === 'function' && callback();
        });
    }
});
