//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Input,
        WowPage.wow$.mixins.Router,
        WowPage.wow$.mixins.Pages,
    ],
    data: {
        signature: '',
    },
    onLoad (options) {
        this.routerGetParams(options);
        this.assignmentData();
    },
    assignmentData () {
        let { value } = this.data.params$;
        this.setData({ signature: value || '' });
    },
    handleSubmit () {
        let { signature } = this.data;
        signature = signature.trim();
        if (!signature) return this.modalToast('请输入个性签名');
        let { Http } = this.wow$.plugins;
        Http(Http.API.DO_USER_UPDATE, {
            signature,
        }).then(() => {
            this.modalToast('修改成功');
            let objPage = this.pagesGetByIndex(1);
            objPage.setData({ 'objEntry.signature.value': signature });
            setTimeout(this.routerPop.bind(this), 1000);
        }).toast();
    }
});
