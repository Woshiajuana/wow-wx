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
        arrEntry: [
            { label: '照片', class: 'icon-zhaopian_huabanfuben', useMargin: true, url: '' },
            { label: '收藏', class: 'icon-shoucang-tianchong', useMargin: true, url: '' },
            { label: '历史', class: 'icon-3lishi', useMargin: false, url: '' },
            { label: '设置', class: 'icon-shezhi', useMargin: true, url: '' },
        ]
    },
});
