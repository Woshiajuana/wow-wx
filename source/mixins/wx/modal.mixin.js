
import Config from '../../config'
import Helper from './helper.mixin'

// 格式化数据
const formatOptions = (options) => {
    let text;
    if (typeof options === 'object') {
        text = Config.modalFormatMsg(options);
    } else {
        text = options + '';
        options = {};
    }
    return {
        text,
        options,
    }
};

export default {

    /**
     * 小程序 提示模块
     * */
    modalToast (options) {
        if (typeof options === 'undefined') {
            return null;
        }
        let { text: title, options: opt } = formatOptions(options);
        if (title === '') return null;
        console.log('小程序提示 => ', title);
        wx.showToast({
            duration: 3000,
            icon: 'none',
            mask: true,
            title,
            ...opt,
        });
    },

    /**
     * 小程序 模态对话框
     * */
    modalConfirm (options) {
        let { text: content, options: opt } = formatOptions(options);
        return Helper.helperFnPromise('showModal', { content, ...opt }).then((res) => {
            return res.confirm ? Promise.resolve(res) : Promise.reject();
        });
    },

    /**
     * 显示操作菜单
     * */
    modalActionSheet (options) {
        if (Object.prototype.toString.call(options) === '[object Array]') {
            options = { itemList: options };
        }
        return Helper.helperFnPromise('showActionSheet', options).catch((err) => Promise.reject());
    },

}
