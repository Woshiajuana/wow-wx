//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage                      from '../../../source/lib/page'

WowPage({
    data: {
        xx: 11
    },
    onShow () {
        console.log(1);
    }
});
