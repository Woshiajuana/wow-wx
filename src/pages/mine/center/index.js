//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
    ],
    data: {
        objEntry: {
            avatar: { label: '头像', value: '', useMargin: true },
            nickname: { label: '昵称', value: '我是阿倦啊', useMargin: true, url: '' },
            email: { label: '邮箱', value: '979703986@qq.com', useMargin: false, url: '' },
            sex: { label: '性别', value: '男', useMargin: true, url: '' },
            signature: { label: '签名', value: '好好学习，天天向上！', useMargin: false, url: '' },
            qr: { label: '名片', value: '', useMargin: false, url: '' },
        },
    },
});
