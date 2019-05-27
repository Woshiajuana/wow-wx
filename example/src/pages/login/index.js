//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage                      from '../../../source/lib/page'

WowPage({
    mixins: [
        WowPage.wow$.mixins.text,
    ],
    data: {
        xx: 11
    },
    onShow () {
        console.log(this.wow$)
        console.log('page => ', this.data.text)
    }
});
