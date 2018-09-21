//index.js
import './index.json'
import './index.wxss'
// import './index.wxml'

import Mixin                        from '../../../../wow-wx-util/lib/mixin.util'
import SourceMixin                  from '../../../../wow-wx-util/mixins/source.mixin'

const arr_src = [
    { key: 'mine', value: 'mine-icon.png' },
];

Page(Mixin({
    mixins: [SourceMixin],
    data: {

    },
    onLoad () {
        this.sourceGet(arr_src);
    },
}));
