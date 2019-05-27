
import {
    PluginsConfig,
} from '../config'

const {
    modalTCallback,
    duration,
} = PluginsConfig.MODAL;

const analysisParameter = (options) => {
    if (typeof options === 'undefined')
        return null;
    let content = options;
    if (typeof options === 'object') {
        content = modalTCallback(options);
    }
    return content + '';
};

export default {

    // 弱提示
    toast (options) {
        let title = analysisParameter(options);
        wx.showToast({
            title,
            duration: options.duration || duration,
            icon: 'none',
        })
    },

    // 确认弹窗
    confirm: (options) => new Promise((resolve, reject) => {
        let opt = {};
        if (typeof options === 'object') opt = options;
        let content = analysisParameter(options);
        wx.showModal({
            title: '温馨提示',
            content,
            ...opt,
            success: res=>{
                resolve(res);
            },
            fail: err => {
                reject(err);
            },
        });
    })

}
