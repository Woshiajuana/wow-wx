
import Helper from './helper.mixin'

export default {

    /**
     * 设置系统剪贴板的内容。调用成功后，
     * 会弹出 toast 提示"内容已复制"，持续 1.5s
     * */
    clipboardSetData (data) {
        return Helper.helperFnPromise('setClipboardData', {data});
    },

    /**
     * 获取系统剪贴板的内容
     * */
    clipboardGetData (options) {
        return Helper.helperFnPromise('getClipboardData', options);
    },

}
