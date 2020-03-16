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
        return { url: Http.API.REQ_COLLECT_LIST };
    },
    handleMore (event) {
        let { item, index } = this.inputParams(event);
        this.modalActionSheet([
            '查看详情',
            '取消收藏',
        ]).then(({ tapIndex }) => {
            tapIndex
                ? this.doCollectDelete(item, index)
                : this.routerPush('photo_info_index', item)
        }).null();
    },
    doCollectDelete (item, index) {
        this.modalConfirm(`确认取消收藏么？`).then(() => {
            let { Http } = this.wow$.plugins;
            return Http(Http.API.DO_COLLECT_OPERATION, {
                photo: item.photo._id,
            });
        }).then(() => {
            this.modalToast('取消成功');
            this.handleRefresh();
        }).toast();
    },
});
