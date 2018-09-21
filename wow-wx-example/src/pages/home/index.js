//index.js
import './index.json'
import './index.wxss'
import './index.wxml'

import Mixin                        from '../../../../wow-wx-util/lib/mixin.util'
import SourceMixin                  from '../../../../wow-wx-util/mixins/source.mixin'
import Middleware                   from '../../../../wow-wx-middleware'
import TextMiddleware               from 'middleware/text.middleware'
import HaMiddleware                 from 'middleware/ha.middleware'

const arr_src = [
    { key: 'mine', value: 'mine-icon.png' },
];

Page(Mixin({
    mixins: [SourceMixin, Middleware],
    data: {

    },
    onLoad () {
        this.sourceGet(arr_src);
    },
    handleTap () {
        return this.use(
            TextMiddleware(),
            HaMiddleware(),
        )
    }
}));
