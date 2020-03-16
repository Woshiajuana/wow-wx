//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

const HISTORY_KEYWORD = 'HISTORY_KEYWORD';

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Input,
        WowPage.wow$.mixins.Store,
        WowPage.wow$.mixins.Router,
    ],
    data: {
        strKeyword: '',
        arrHistory: [],
        numIndex: 1,
        numSize: 10,
        arrData: '',
        numTotal: 0,
    },
    onLoad (options) {
        this.getHistoryKeywords();
        this.routerGetParams(options);
    },
    inputCallback (item, value) {
        if (value === '') {
            this.setData({ arrData: '' });
        }
    },
    getHistoryKeywords () {
        this.storeGet(HISTORY_KEYWORD).then((res) => {
            this.setData({ arrHistory: res || [] });
        }).null();
    },
    saveHistoryKeywords () {
        let { arrHistory, strKeyword } = this.data;
        strKeyword = strKeyword.trim();
        if (!strKeyword) return null;
        let index = arrHistory.indexOf(strKeyword);
        if (index > -1) {
            arrHistory.splice(index, 1);
        }
        arrHistory.unshift(strKeyword);
        this.setData({ arrHistory });
        this.storeSet(HISTORY_KEYWORD, arrHistory);
    },
    handleClear () {
        this.modalConfirm(`确认清除历史搜索？`).then(() => {
            this.storeDel(HISTORY_KEYWORD);
            this.setData({ arrHistory: [] });
        }).null();
    },
    handleSearch () {
        let { strKeyword } = this.data;
        if (!strKeyword)
            return this.modalToast('请输入关键字');
        this.setData({ numIndex: 1 });
        this.reqPhotoSearch();
    },
    handleSelect (event) {
        let { item } = this.inputParams(event);
        this.setData({ strKeyword: item });
        this.handleSearch();
    },
    reqPhotoSearch () {
        let { Http } = this.wow$.plugins;
        let { numIndex, numSize, arrData, strKeyword } = this.data;
        Http(Http.API.REQ_PHOTO_SEARCH, {
            numIndex,
            numSize,
            keyword: strKeyword,
        }).then((res) => {
            let { list = [], total } = res || {};
            this.setData({
                arrData: numIndex === 1 ? list : [ ...arrData, ...list ],
                numTotal: total,
            });
            this.saveHistoryKeywords();
        }).toast();
    },
    // 上拉加载更多
    onReachBottom () {
        let { numIndex, numTotal, arrData } = this.data;
        if (arrData.length >= numTotal)
            return console.log('数据加载已完毕');
        numIndex++;
        this.setData({ numIndex });
        this.reqPhotoSearch();
    },
});
