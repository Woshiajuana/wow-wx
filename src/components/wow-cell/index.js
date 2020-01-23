import './index.json'
import './index.wxml'
import './index.scss'

import WowComponent from 'source/lib/component'

new WowComponent({
    // 外部样式类
    externalClasses: [
        'class-navigation',
    ],
    properties: {
        cellLabel: { // 最大距离
            type: String,
            value: ''
        },
        cellValue: { // 最小距离
            type: String,
            value: ''
        },
        iconClass: {
            type: String,
            value: ''
        },
    },
});
