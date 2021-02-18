//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'wow-wx/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Jump,
        WowPage.wow$.mixins.Payment,
    ],
    onLoad (options) {

    },
    handleTest () {
        this.paymentRequest(
            {"appId":"wx5d451328ca6a71cb","nonceStr":"a489f49674f54ed3aba1f98611d38ac7","package":"prepay_id=wx1909375175621848dd77779ea94f6e0000","paySign":"313C75E5E586A6DCC2AFFA25EEA7B851","signType":"MD5","timeStamp":"1611020271"}
        ).then(res => {
            console.log(res);
        }).null();
    },
});
