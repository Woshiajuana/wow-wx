import './index.json'
import './index.wxml'
import './index.scss'

import WowComponent from 'source/lib/component'

new WowComponent({
    mixins: [
        WowComponent.wow$.mixins.Router,
        WowComponent.wow$.mixins.Jump,
        WowComponent.wow$.mixins.Input,
    ],
    properties: {
        cellLabel: {
            type: String,
            value: '',
        },
    }
});
