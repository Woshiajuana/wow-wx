//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Router,
        WowPage.wow$.mixins.User,
        WowPage.wow$.mixins.Input,
        WowPage.wow$.mixins.Jump,
    ],
    data: {
        isLoading: true,
        objData: '',
        arrData: '',
    },
    onLoad (options) {
        this.userGet();
        this.routerGetParams(options);
        this.reqPhotoInfo();
    },
    reqPhotoInfo () {
        let { Http } = this.wow$.plugins;
        let { _id: id } = this.data.params$;
        Http(Http.API.REQ_PHOTO_INFO, {
            id: id || "5e68626109f975847a991ea7",
        }, {
            loading: !this.data.isLoading,
        }).then((res) => {
            // 滚动到顶部
            wx.pageScrollTo({ scrollTop: 0 });
            this.setData({ objData: res });
        }).toast().finally(() => {
            this.reqPhotoRecommend();
        });
    },
    reqPhotoRecommend () {
        let { Http } = this.wow$.plugins;
        let { _id: id } = this.data.params$;
        Http(Http.API.REQ_PHOTO_RECOMMEND, {
            exclude: [id] || ['5e68626109f975847a991ea7'],
            limit: 10,
        },{
            loading: !this.data.isLoading,
        }).then((res) => {
            this.setData({ arrData: res });
        }).toast().finally(() => {
            this.setData({ isLoading: false });
        });
    },
    // 不喜欢
    handleDislikeOperation () {
        let { objData } = this.data;
        let { Http } = this.wow$.plugins;
        Http(Http.API.DO_DISLIKE_OPERATION, {
            photo: objData._id,
        }).then((res) => {
            objData.dislikeId = res || '';
            this.setData({ objData });
            this.modalToast(res ? '哦豁...作者会努力的' : '取消成功');
        }).toast();
    },
    // 点赞
    handleThumbOperation () {
        let { objData } = this.data;
        let { Http } = this.wow$.plugins;
        Http(Http.API.DO_THUMB_OPERATION, {
            photo: objData._id,
        }).then((res) => {
            objData.thumbId = res || '';
            objData.numThumb += res ? 1 : -1;
            this.setData({ objData });
            this.modalToast(res ? '点赞成功' : '取消成功');
        }).toast();
    },
    // 收藏
    handleCollectOperation () {
        let { objData } = this.data;
        let { Http } = this.wow$.plugins;
        Http(Http.API.DO_COLLECT_OPERATION, {
            photo: objData._id,
        }).then((res) => {
            objData.collectId = res || '';
            objData.numCollect += res ? 1 : -1;
            this.setData({ objData });
            this.modalToast(res ? '收藏成功' : '取消成功');
        }).toast();
    },
    // 选择
    handleSelect (event) {
        let { item } = this.inputParams(event);
        this.setData({ 'params$._id': item._id });
        this.reqPhotoInfo();
    },
    // 关注 or 取消关注
    handleFollowOperation () {
        let { objData } = this.data;
        let { Http } = this.wow$.plugins;
        Http(Http.API.DO_FOLLOW_OPERATION, {
            id: objData.user._id,
        }).then((res) => {
            objData.user.follower = res || '';
            this.setData({ objData });
            this.modalToast(res ? '关注成功' : '取消成功');
        }).toast();
    }
});
