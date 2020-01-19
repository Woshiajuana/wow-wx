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
        isAnimate: false,
        isRefresh: false,
        strRefreshPrompt: '',
    },
    properties: {
        numMax: { // 最大距离
            type: Number,
            value: 120
        },
        numMin: { // 最小距离
            type: Number,
            value: 80
        },
    },
    scrollTop: 0,
    startClientY: 0,
    lifetimes: {
        attached () {
            console.log('加载测试组件 => 成功');
        },
    },
    methods: {
        handleScroll (event) {
            console.log('event.detail.scrollTop', event.detail.scrollTop)
            this.scrollTop = event.detail.scrollTop;
        },
        handleScrollToUpper () {
            console.log('到顶部了==========')
            this.scrollTop = 0;
        },
        handleTouchStart (event) {
            console.log('触发handleTouchStart');
            let [ objStart ] = event.touches;
            if (objStart) this.startClientY = objStart.clientY;
            this.setData({ isAnimate: false, strRefreshPrompt: '', isRefresh: false });
        },
        handleTouchMove (event) {
            console.log('触发handleTouchMove  before', this.scrollTop);
            if (this.scrollTop > 0) return null;
            console.log('触发handleTouchMove after', this.scrollTop);
            let [ objEnd ] = event.touches;
            let numY = objEnd.clientY - this.startClientY;
            if (numY > this.data.numMax) return null;
            this.setData({ numY, isDisabled: true });
        },
        handleTouchEnd () {
            console.log('触发handleTouchEnd');
            let { numY, numMin, isRefresh } = this.data;
            if (numY < numMin) {
                numY = 0;
            } else {
                numY = numMin;
                isRefresh = true;
            }
            this.setData({ numY, isAnimate: true, isRefresh  });

            if (isRefresh) {
                // 触发接口
                setTimeout(() => {
                    this.setData({ strRefreshPrompt: '刷新成功' });
                    setTimeout(() => {
                        this.setData({ isDisabled: false, numY: 0,  });
                    }, 300);
                }, 2000);

            } else {
                this.setData({ isDisabled: false, numY: 0 });
            }
            // console.log('滚动结束 =>', event);
        },
    },
});

// "enablePullDownRefresh": true,
