//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    data: {
        arrEntry: [
            {
                label: '关于我们',
                useMargin: true,
                url: 'about_index'
            },
            {
                label: '帮助',
                useMargin: true,
                url: 'webview_index'
            },
            {
                label: '反馈',
                useMargin: false,
                url: 'webview_index'
            },
        ],
    },
});
