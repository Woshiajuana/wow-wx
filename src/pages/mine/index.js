//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Refresh,
        WowPage.wow$.mixins.Input,
        WowPage.wow$.mixins.Router,
        WowPage.wow$.mixins.Jump,
    ],
    data: {
        arrEntry: [
            { label: '照片', icon: 'icon-zhaopian_huabanfuben', useMargin: true, url: 'photo_index' },
            { label: '收藏', icon: 'icon-shoucang-tianchong', useMargin: true, url: 'collect_index' },
            { label: '历史', icon: 'icon-3lishi', useMargin: false, url: 'history_index' },
            { label: '设置', icon: 'icon-shezhi', useMargin: true, url: 'setting_index' },
        ],
        objNotice: { label: '消息', url: 'notice_index' },
        objInfo: {
            following: { value: 999, label: '关注', url: '' },
            followers: { value: 999, label: '粉丝' },
            photo: { value: 999, label: '照片' },
        },
    },
});
