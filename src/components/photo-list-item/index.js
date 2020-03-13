import './index.json'
import './index.wxml'
import './index.scss'

import WowComponent from 'source/lib/component'

new WowComponent({
    mixins: [
        WowComponent.wow$.mixins.Input,
    ],
    properties: {
        data: { // 推荐
            type: Object,
            value: '',
        },
        mode: {
            type: String,
            value: 'manage',
        },
    },
});
