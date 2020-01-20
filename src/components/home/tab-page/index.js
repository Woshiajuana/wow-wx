import './index.json'
import './index.wxml'
import './index.scss'

import WowComponent from 'source/lib/component'

new WowComponent({
    properties: {
        prompt: { // 推荐
            type: String,
            value: ''
        },
    },
    methods: {
        handleRefresh (event) {
            console.log('handleRefresh', event);
            let { callback } = event.detail;
            callback();
        },
        handleLoad (event) {
            console.log('handleLoad', event);
            let { callback } = event.detail;
            callback();
        },
    },
});
