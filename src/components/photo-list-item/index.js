import './index.json'
import './index.wxml'
import './index.scss'

import WowComponent from 'source/lib/component'

new WowComponent({
    mixins: [
        WowComponent.wow$.mixins.Input,
        WowComponent.wow$.mixins.Router,
        WowComponent.wow$.mixins.Jump,
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
    methods: {
        handleFireFn () {
            let { mode, data } = this.data;
            if (mode === 'info')
                return this.triggerEvent('click', data);
            this.routerPush('photo_info_index', data);
        },
    },
});
