import './index.json'
import './index.wxml'
import './index.scss'

import WowComponent from 'source/lib/component'

new WowComponent({
    mixins: [
        WowComponent.wow$.mixins.Text,
    ],
    data: {

    },
    lifetimes: {
        attached () {
            console.log('加载测试组件 => 成功');
        },
    },
    methods: {
        handleScroll (event) {
            console.log('滚动距离 =>', event);
        },
        handleTouchStart (event) {
            console.log('滚动开始 =>', event);
        },
        handleTouchEnd (event) {
            console.log('滚动结束 =>', event);
        },
    },
});

// "enablePullDownRefresh": true,
