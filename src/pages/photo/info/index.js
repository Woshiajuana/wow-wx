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
    ],
    data: {
        isLoading: true,
        objData: '',
        arrData: '',
    },
    onLoad (options) {
        this.userGet();
        this.routerGetParams(options);
        this.assignmentData();
        this.reqPhotoInfo();
    },
    assignmentData () {

    },
    reqPhotoInfo () {
        let { Http } = this.wow$.plugins;
        let { _id: id } = this.data.params$;
        Http(Http.API.REQ_PHOTO_INFO, {
            id: "5e68626109f975847a991ea7",
        }, {
            loading: false,
        }).then((res) => {
            this.setData({ objData: res });
        }).toast().finally(() => {
            this.reqPhotoRecommend();
        });
    },
    reqPhotoRecommend () {
        let { Http } = this.wow$.plugins;
        let { _id: id } = this.data.params$;
        Http(Http.API.REQ_PHOTO_RECOMMEND, {
            exclude: ['5e68626109f975847a991ea7'],
            limit: 10,
        },{
            loading: false,
        }).then((res) => {
            this.setData({ arrData: res });
        }).toast().finally(() => {
            this.setData({ isLoading: false });
        });
    },
});
