//index.js
import './index.json'
import './index.wxss'
import './index.wxml'

import Mixin                        from '../../../../source/utils/mixin.util'
import SourceMixin                  from '../../../../source/mixins/source.mixin'
import Middleware                   from '../../../../source/utils/task.util'
import TextMiddleware               from 'tasks/text.task'
import HaMiddleware                 from 'tasks/ha.task'

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
