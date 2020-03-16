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
    ],
    onLoad () {
        this.handleRefresh();
    },
    getReqUrlOrOption () {
        let { Http } = this.wow$.plugins;
        return { url: Http.API.REQ_HISTORY_LIST };
    },
    handleMore (event) {
        let { item, index } = this.inputParams(event);
        this.modalActionSheet([
            '查询详情',
            '清除历史',
        ]).then(({ tapIndex }) => {
            tapIndex
                ? this.doHistoryClear()
                : this.routerPush('photo_info_index', item)
        }).null();
    },
    doHistoryClear () {
        this.modalConfirm(`确认清除浏览历史记录么？`).then(() => {
            let { Http } = this.wow$.plugins;
            return Http(Http.API.DO_HISTORY_CLEAR);
        }).then(() => {
            this.modalToast('清除成功');
            this.handleRefresh();
        }).toast();
    },
});
