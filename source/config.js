import {
    UtilConfig as UConfig,
    PluginsConfig as PConfig,
} from 'config/wow-wx.config'

// 工具配置文件
export const UtilConfig = {
    // 弹窗文案字段配置
    modalTCallback (options) {
        let {
            errMsg,
        } = options;
        return errMsg || JSON.stringify(options);
    },

    ...UConfig,
};

// 插件配置文件
export const PluginsConfig = {

    // 弹窗文案字段配置
    modalTCallback (options) {
        let {
            errMsg,
        } = options;
        return errMsg || JSON.stringify(options);
    },

    ...PConfig,
};
