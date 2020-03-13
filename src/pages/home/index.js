//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Input,
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Router,
        WowPage.wow$.mixins.Jump,
        WowPage.wow$.mixins.Refresh,
    ],
    data: {
        arrData: '',
        isLoading: false,
    },
    onLoad (options) {
        this.handleRefresh();
    },
    handleRefresh (callback) {
        this.reqDataList(callback);
    },
    reqDataList (callback) {
        let { arrData, isLoading } = this.data;
        let { Http } = this.wow$.plugins;
        if (isLoading) return console.log('正在加载数据');
        this.setData({ isLoading: true });
        Http(Http.API.REQ_PHOTO_RECOMMEND, {
            limit: 20,
        }, {
            loading: typeof callback !== 'function',
        }).then((res) => {
            if (!arrData) arrData = [];
            arrData = typeof callback === 'function' ? [ ...res, ...arrData ] : [ ...arrData, ...res ];
        }).toast().finally(() => {
            this.setData({
                arrData,
                isLoading: false,
            });
            typeof callback === 'function' && callback();
        });
    },
    onReachBottom (event) {
        this.reqDataList();
    },
});
