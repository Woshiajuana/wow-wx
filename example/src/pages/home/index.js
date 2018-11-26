//index.js
import './index.json'
import './index.wxss'
import './index.wxml'

import Mixin                        from 'wow-wx/utils/mixin.util'
import SourceMixin                  from 'wow-wx/mixins/source.mixin'
import TaskMixin                    from 'wow-wx/utils/task.util'
import TextTask                     from 'tasks/text.task'
import HaTask                       from 'tasks/ha.task'

const arr_src = [
    { key: 'mine', value: 'mine-icon.png' },
];

Page(Mixin({
    mixins: [SourceMixin, TaskMixin],
    data: {

    },
    onShow() {

    },
    onLoad () {
        this.sourceGet(arr_src);
    },
    handleTap () {
        return this.run(
            TextTask(),
            HaTask(),
        )
    }
}));
