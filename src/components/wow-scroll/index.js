import './index.json'
import './index.wxml'
import './index.scss'

import WowComponent from 'source/lib/component'

new WowComponent({
    mixins: [
        WowComponent.wow$.mixins.Text,
    ],
    data: {
        numY: 0,
        isDisabled: false,
        objStart: {
            clientY: 0,
            scrollTop: 0,
        },
        objEnd: {
            clientY: 0,
            scrollTop: 0,
        },
        scrollTop: 0,

        numMax: 200, // 最大距离
        numMin: 100, // 最小距离

    },
    lifetimes: {
        attached () {
            console.log('加载测试组件 => 成功');
        },
    },
    methods: {
        handleScroll (event) {
            this.setData({ scrollTop: event.detail.scrollTop });
            // console.log('滚动距离 =>', event);
        },
        handleTouchStart (event) {
            // console.log('滚动开始 =>', event);
            let [ objStart ] = event.touches;
            if (objStart) this.setData({ objStart });
        },
        handleTouchMove (event) {
            let { scrollTop, objStart } = this.data;
            if (scrollTop > 0) return;
            let [ objEnd ] = event.touches;
            let numY = objEnd.clientY - objStart.clientY;
            this.setData({ numY, objEnd });
            console.log('滚动中 numY=>', numY);
        },
        handleTouchEnd (event) {
            let { numY, numMin, numMax } = this.data;
            if (numY < numMin) numY = 0;
            else numY = numMax;
            this.setData({ numY });
            // console.log('滚动结束 =>', event);

        },
    },
});

// "enablePullDownRefresh": true,
