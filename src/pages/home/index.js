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
                label: '推荐',
                limit: 10,
                arrData: '',
                url: 'REQ_PHOTO_RECOMMEND',
                isLoading: false,
            },
            {
                label: '关注',
                limit: 10,
                arrData: '',
                url: 'REQ_PHOTO_RECOMMEND',
                isLoading: false,
            },
        ],
    },
    onLoad (options) {
        this.routerGetParams(options);
        this.assignmentData();
        this.reqDataList();
    },
    assignmentData () {
        let { key } = this.data.params$;
        this.setData({ numCurIndex: key === 'objInfo.numFollowing' ? 1 : 0 });
    },
    reqDataList (callback) {
        let { arrTab, numCurIndex } = this.data;
        let { url, limit, arrData } = arrTab[numCurIndex];
        let { Http } = this.wow$.plugins;
        arrTab[numCurIndex].isLoading = true;
        this.setData({ arrTab });
        Http(Http.API[url], {
            limit,
        }, {
            loading: typeof callback !== 'function',
        }).then((res) => {
            if (!arrData) arrData = [];
            arrTab[numCurIndex].arrData = typeof callback === 'function' ? [ ...res, ...arrData ] : [ ...arrData, ...res ];
        }).toast().finally(() => {
            arrTab[numCurIndex].isLoading = false;
            this.setData({ arrTab });
            console.log(arrTab)
            typeof callback === 'function' && callback();
        });
    },
    handleRefresh (callback) {
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
        let { isLoading } = arrTab[numCurIndex];
        if (isLoading)
            return console.log('数据正在加载中');
        this.reqDataList();
    },
});
