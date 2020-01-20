import './index.json'
import './index.wxml'
import './index.scss'

import WowComponent from 'source/lib/component'

new WowComponent({
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
        isNoMore: {
            type: Boolean,
            value: false
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
            this.scrollTop = event.detail.scrollTop;
        },
        handleScrollToUpper () {
            this.scrollTop = 0;
            setTimeout(() => {
                this.scrollTop = 0;
            },100);
        },
        handleTouchStart (event) {
            let { isRefresh, numY } = this.data;
            if (isRefresh && numY > 0) return null;
            let [ objStart ] = event.touches;
            if (objStart) this.startClientY = objStart.clientY;
            this.setData({ isAnimate: false, strRefreshPrompt: '', isRefresh: false });
        },
        handleTouchMove (event) {
            let { isRefresh, numY } = this.data;
            if (isRefresh && numY > 0) return null;
            if (this.scrollTop > 0) return null;
            let [ objEnd ] = event.touches;
            numY = objEnd.clientY - this.startClientY;
            if (numY > this.data.numMax) return null;
            this.setData({ numY, isDisabled: true });
        },
        handleTouchEnd () {
            let { numY, numMin, isRefresh } = this.data;
            if (isRefresh && numY > 0) return null;
            if (numY < numMin) {
                numY = 0;
            } else {
                numY = numMin;
                isRefresh = true;
            }
            this.setData({ numY, isAnimate: true, isRefresh  });
            if (!isRefresh) {
               return this.setData({ isDisabled: false, numY: 0 });
            }
            this.triggerEvent('onrefresh', {
                callback: (res) => {
                    let { strPrompt = '刷新成功', isNoMore } = res || {};
                    this.setData({ strRefreshPrompt: strPrompt });
                    if (isNoMore) {
                        this.setData({ isNoMore });
                    }
                    setTimeout(() => {
                        this.setData({ isDisabled: false, numY: 0,  });
                    }, 300);
                },
            });
        },
        handleScrollToLower () {
            this.triggerEvent('onload', {
                callback: (res) => {
                    let { isNoMore } = res || {};
                    if (isNoMore !== undefined) {
                        this.setData({ isNoMore });
                    }
                },
            });
        },
    },
});

// "enablePullDownRefresh": true,
