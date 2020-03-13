import './index.json'
import './index.wxml'
import './index.scss'

import WowComponent from 'source/lib/component'

new WowComponent({
    properties: {
        data: { // 推荐
            type: Object,
            value: '',
        },
    },
});
