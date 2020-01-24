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
    ],
    data: {
        arrEntry: [
            { label: '照片', icon: 'icon-zhaopian_huabanfuben', useMargin: true, url: '' },
            { label: '收藏', icon: 'icon-shoucang-tianchong', useMargin: true, url: '' },
            { label: '历史', icon: 'icon-3lishi', useMargin: false, url: '' },
            { label: '设置', icon: 'icon-shezhi', useMargin: true, url: 'setting_index' },
        ]
    },
    handleSelect (event) {
        let { item } = this.inputParams(event);
        let { url } = item;
        console.log('点了外面', url);
        this.routerPush(url);
    },
});
