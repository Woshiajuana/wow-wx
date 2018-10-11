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
        // 路径配置
        path: './../../example/src/config/',

        // 文件名配置
        name: 'router.config.js',
    },
};
