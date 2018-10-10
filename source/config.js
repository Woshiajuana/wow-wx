import ObjectUtil                       from './utils/object.util'
import {
    UtilsConfig as UConfig,
    PluginsConfig as PConfig,
} from 'config/wow-wx.config'

// 工具配置文件
export const UtilsConfig = ObjectUtil.deepCopy({


}, UConfig);

// 插件配置文件
export const PluginsConfig = ObjectUtil.deepCopy({

    // 提示配置模块
    MODAL: {

        // 弹窗文案字段配置
        modalTCallback (options) {
            let {
                errMsg,
            } = options;
            return errMsg || JSON.stringify(options);
        },

        // 弱提示持续时间
        duration: 3000,
    },

    // 路由配置模块
    ROUTER: {
        // 路径配置
        path: '',
    }

}, PConfig);
