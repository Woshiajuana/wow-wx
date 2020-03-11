//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Text,
        WowPage.wow$.mixins.Calendar,
        WowPage.wow$.mixins.Router,
        WowPage.wow$.mixins.Input,
        WowPage.wow$.mixins.Jump,
    ],
    data: {
        strStartTime: '',
        objData: '',
    },
    onLoad(options) {
        this.calendarRender();
        this.reqPhotoList();
    },
    handleSelect (event) {
        let { item } = this.inputParams(event);
        let { date } = item;
        this.calendarRender(new Date(date.replace(/-/g, '/')));
        this.reqPhotoList();
    },
    handleRefresh () {
        this.calendarRender();
        this.reqPhotoList();
    },
    reqPhotoList () {
        let { calendar$, strStartTime } = this.data;
        let { arrDate } = calendar$;
        let { date: startTime } = arrDate[0];
        let { date: endTime } = arrDate[41];
        if (startTime === strStartTime) return null;
        this.setData({ strStartTime: startTime });
        let { Http } = this.wow$.plugins;
        Http(Http.API.REQ_PHOTO_LIST, {
            startTime,
            endTime,
        }).then((res) => {
            let objData = {};
            res.forEach((item) => {
                let { photo, created_at } = item;
                let { path, base, filename } = photo || {};
                objData[created_at.substring(0, 10)] = {
                    ...item,
                    imgUrl: `${base}${path}${filename}`,
                };
            });
            this.setData({ objData });
        }).toast();
    },
});
