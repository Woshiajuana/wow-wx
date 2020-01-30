import './index.json'
import './index.wxml'
import './index.scss'

import WowComponent from 'source/lib/component'

new WowComponent({
    mixins: [
        WowComponent.wow$.mixins.Input,
    ],
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    externalClasses: ['class-button'],
    data: {
        numLen: 0,
    },
    properties: {
        value: {
            type: String,
            value: '',
        },
        placeholder: {
            type: String,
            value: '请输入',
        },
        prompt: {
            type: String,
            value: '',
        },
        maxLength: {
            type: Number,
            value: 20,
        }
    },
    methods: {
        handleInput (event) {
            let { value } = this.inputParams(event);
            this.triggerEvent('input', { value });
        },
        handleClose () {
            this.triggerEvent('input', { value: '' });
        },
    },
});
