import './index.json'
import './index.wxml'
import './index.scss'

import WowComponent from 'source/lib/component'

new WowComponent({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    externalClasses: ['class-button'],
    properties: {
        cellLabel: {
            type: String,
            value: '',
        },
        mode: {
            type: String,
            value: '',
        },
    }
});
