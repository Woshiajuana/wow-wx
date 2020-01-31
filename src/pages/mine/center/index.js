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
        WowPage.wow$.mixins.Jump,
    ],
    data: {
        objEntry: {
            avatar: {
                label: '头像',
                value: '',
                useMargin: true,
                fn: 'handleAvatar'
            },
            nickname: {
                label: '昵称',
                value: '我是阿倦啊',
                useMargin: true,
                url: 'mine_nickname_index'
            },
            email: {
                label: '邮箱',
                value: '979703986@qq.com',
                useMargin: false,
                url: 'mine_email_index'
            },
            sex: {
                label: '性别',
                value: '男',
                key: 'objEntry.sex',
                useMargin: true,
                url: 'mine_sex_index',
                valueKey: 'value',
                labelKey: 'label',
                options: [
                    { label: '男', value: 1 },
                    { label: '女', value: 2 },
                ],
            },
            signature: {
                label: '签名',
                value: '好好学习，天天向上！',
                useMargin: false,
                url: 'mine_signature_index'
            },
            qr: {
                label: '名片',
                value: '',
                useMargin: false,
                url: 'mine_qrcode_index'
            },
        },
    },
    handleAvatar () {
        this.modalActionSheet([
            '相册',
            '拍照',
        ]).then((res) => {
            console.log(res);
        }).null();
    },
    handleChange (event) {
        console.log(event);
    },
});
