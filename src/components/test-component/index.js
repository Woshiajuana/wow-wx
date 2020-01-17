import './index.json'
import './index.wxml'
import './index.scss'

import WowComponent from 'source/lib/component'

new WowComponent({

    mixins: [
        WowComponent.wow$.mixins.Text,
    ],
    lifetimes: {
        attached () {
            console.log('加载测试组件 => 成功');
        },
    },
});
