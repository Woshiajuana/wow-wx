
import {
    PluginsConfig,
} from '../config'

const {
    modalTCallback,
} = PluginsConfig;


export default {
    // 弱提示
    toast (options) {
        if (typeof options === 'undefined')
            return null;
        let title = '';
        let duration = 3000;
        if (typeof options === 'object') {
            title = modalTCallback(options);
        }
        wx.showToast({
            title,
            duration,
            icon: 'none',
        })
    }
}
