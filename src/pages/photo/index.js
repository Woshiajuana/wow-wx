//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Router,
        WowPage.wow$.mixins.Input,
        WowPage.wow$.mixins.Jump,
        WowPage.wow$.mixins.Refresh,
    ],
    onLoad () {
        this.handleRefresh();
    },
    getReqUrlOrOption () {
        let { Http } = this.wow$.plugins;
        return { url: Http.API.REQ_PHOTO_LIST };
    },
    handleMore (event) {
        let { item, index } = this.inputParams(event);
        this.modalActionSheet([
            '编辑',
            '删除',
        ]).then(({ tapIndex }) => {
            tapIndex
                ? this.doPhotoDelete(item, index)
                : this.routerPush('photo_details_index', item)
        }).null();
    },
    doPhotoDelete (item, index) {
        this.modalConfirm(`确认删除${item.created_at.substring(0, 10)}日的照片么？`).then(() => {
            let { Http } = this.wow$.plugins;
            return Http(Http.API.DO_PHOTO_DELETE, {
                id: item._id,
            });
        }).then(() => {
            this.modalToast('删除成功');
            let { arrData } = this.data;
            arrData.splice(index, 1);
            this.setData({ arrData });
        }).toast();
    },
});
