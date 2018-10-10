import Config                    from 'config/env.config'

let {
    SOURCE_BASE_URL
} = Config;

// 工具配置
export const UtilConfig = {
    SOURCE_BASE_URL,
};

// 插件配置
export const PluginsConfig = {
    ROUTER: {
        path: 'config/router.config',
    },
};
