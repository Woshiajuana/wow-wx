import './index.json'
import './index.wxml'
import './index.scss'

import WowComponent from 'source/lib/component'

new WowComponent({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        cellLabel: {
            type: String,
            value: ''
        },
        cellValue: {
            type: String,
            value: ''
        },
        iconClass: {
            type: String,
            value: ''
        },
        useMargin: {
            type: Boolean,
            value: false,
        },
        cellHeight: {
            type: Number,
            value: 100,
        },
        useArrow: {
            type: Boolean,
            value: true,
        },
    },
});
