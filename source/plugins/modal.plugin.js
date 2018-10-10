
import {
    PluginsConfig,
} from '../config'

const {
    modalTCallback,
    duration,
} = PluginsConfig.MODAL;


export default {

    // 弱提示
    toast (options) {
        if (typeof options === 'undefined')
            return null;
        let message = options;
        if (typeof options === 'object') {
            message = modalTCallback(options);
        }
        wx.showToast({
            title: message + '',
            duration: options.duration || duration,
            icon: 'none',
        })
    },

    // 确认弹窗
    confirm: (options = {}) => new Promise((resolve, reject) => {
        wx.showModal({
            title: '温馨提示',
            ...options,
            success: res=>{
                resolve(res);
            },
            fail: err => {
                reject(err);
            },
        });
    })

}
