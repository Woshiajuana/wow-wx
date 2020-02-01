//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Refresh,
    ],
    data: {
        arrEntry: [
            {
                label: '修改密码',
                useMargin: true,
                url: ''
            },
            {
                label: '关于我们',
                useMargin: false,
                url: ''
            },
            {
                label: '帮助',
                useMargin: true,
                url: ''
            },
            {
                label: '反馈',
                useMargin: false,
                url: ''
            },
        ],
    },
});
