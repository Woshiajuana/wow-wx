
import Helper from './helper.mixin'

export default {

    /**
     * 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位
     * */
    pageScrollTo (options) {
        if (typeof options === 'number') {
            options = { scrollTop: options };
        } else if (typeof options === 'string') {
            options = { selector: options };
        }
        return Helper.helperFnPromise('pageScrollTo', options);
    },

    /**
     * 获取页面 实例
     * 默认获取当前页面
     * */
    pagesGetByIndex (index = 0) {
        let pages = getCurrentPages();
        return pages[pages.length - 1 - index];
    },

}
