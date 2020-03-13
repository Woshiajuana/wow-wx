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
    reqDataList (callback) {
        let { arrTab, numCurIndex } = this.data;
        let { url, numIndex, numSize, arrData } = arrTab[numCurIndex];
        let { Http } = this.wow$.plugins;
        Http(Http.API[url], {
            numIndex,
            numSize,
        }, {
            loading: typeof callback !== 'function',
        }).then((res) => {
            let { list = [], total } = res || {};
            arrTab[numCurIndex].arrData = numIndex === 1 ? list : [ ...arrData, ...list ];
            arrTab[numCurIndex].numTotal = total;
            this.setData({ arrTab });
        }).toast().finally(() => {
            typeof callback === 'function' && callback();
        });
    },
    handleRefresh (callback) {
        let { arrTab, numCurIndex } = this.data;
        arrTab[numCurIndex].numIndex = 1;
        this.setData({ arrTab });
        this.reqDataList(callback);
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
        let { numTotal, arrData } = arrTab[numCurIndex];
        if (arrData.length >= numTotal)
            return console.log('数据加载已完毕');
        arrTab[numCurIndex].numIndex++;
        this.setData({ arrTab });
        this.reqDataList();
    },
});
