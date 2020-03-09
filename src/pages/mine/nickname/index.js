//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Input,
        WowPage.wow$.mixins.Router,
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Pages,
    ],
    data: {
        nickname: '',
    },
    onLoad (options) {
        this.routerGetParams(options);
        this.assignmentData();
    },
    assignmentData () {
        let { value } = this.data.params$;
        this.setData({ nickname: value || '' });
    },
    handleSubmit () {
        let { nickname } = this.data;
        nickname = nickname.trim();
        if (!nickname) return this.modalToast('请输入昵称');
        let { Http } = this.wow$.plugins;
        Http(Http.API.DO_USER_UPDATE, {
            nickname,
        }).then(() => {
            this.modalToast('修改成功');
            let objPage = this.pagesGetByIndex(1);
            objPage.setData({ 'objEntry.nickname.value': nickname });
            setTimeout(this.routerPop.bind(this), 1000);
        }).toast();
    }
});
