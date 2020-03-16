import './index.json'
import './index.wxml'
import './index.scss'

import WowComponent from 'source/lib/component'

new WowComponent({
    mixins: [
        WowComponent.wow$.mixins.System,
    ],
    properties: {
        useBar: {
            type: Boolean,
            value: true,
        },
    },
    // 外部样式类
    externalClasses: [
        'class-navigation',
        'class-navigation-status',
    ],
});
