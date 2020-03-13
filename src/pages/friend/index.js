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
    ],
    data: {
        numCurIndex: 0,
        arrTab: [
            {
                label: '我的粉丝',
                numIndex: 1,
                numSize: 10,
                arrData: '',
                numTotal: 0,
                url: 'REQ_FOLLOWER_LIST',
            },
            {
                label: '我的关注',
                numIndex: 1,
                numSize: 10,
                arrData: '',
                numTotal: 0,
                url: 'REQ_FOLLOWING_LIST',
            },
        ],
    },
    onLoad () {
        this.reqDataList();
    },
    reqDataList () {
        let { arrTab, numCurIndex } = this.data;
        let { url, numIndex, numSize, arrData } = arrTab[numCurIndex];
        let { Http } = this.wow$.plugins;
        Http(Http.API[url], {
            numIndex,
            numSize,
        }).then((res) => {
            let { list = [], total } = res || {};
            arrTab[numCurIndex].arrData = numIndex === 1 ? list : [ ...arrData, ...list ];
            arrTab[numCurIndex].numTotal = total;
            this.setData({ arrTab });
        }).toast();
    },
    handleRefresh () {
        let { arrTab, numCurIndex } = this.data;
        arrTab[numCurIndex].numIndex = 1;
        this.setData({ arrTab });
        this.reqDataList();
    },
    handleTabSwitch (event) {
        let { index } = this.inputParams(event);
        this.setData({ numCurIndex: index });
        if (this.data.arrTab[index].arrData.length === 0) {
            this.reqDataList();
        }
    },
    handleLoad (event) {
        let { arrTab, numCurIndex } = this.data;
        let { numIndex, numTotal, arrData } = arrTab[numIndex];
        if (arrData.length >= numTotal)
            return console.log('数据加载已完毕');
        arrTab[numCurIndex].numIndex++;
        this.setData({ arrTab });
        this.reqDataList();
    },
    // 取消供应收藏
    handleSupplyCancelCollect (event) {
        let { item } = this.inputParams(event);
        this.modalConfirm(`确认取消该供应收藏么?`).then(() => {
            let { Http } = this.wow$.plugins;
            Http(Http.API.DO_SUPPLY_COLLECT_DEL, {
                Id: item.Id,
            });
        }).then(() => {
            this.modalToast('取消成功');
            this.handleRefresh();
        }).toast();
    },
    // 取消店铺收藏
    handleStoreCancelCollect (event) {
        let { item } = this.inputParams(event);
        this.modalConfirm(`确认取消该店铺收藏么?`).then(() => {
            let { Http } = this.wow$.plugins;
            return Http(Http.API.DO_STORE_COLLECT_DEL, {
                Id: item.ShopId,
                Operation: '2',
            });
        }).then(() => {
            this.modalToast('取消成功');
            this.handleRefresh();
        }).toast();
    }
});
