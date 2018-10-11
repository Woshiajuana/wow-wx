import Config                       from 'config/env.config'
import RouterConfig                 from 'config/router.config'

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
        routerConfig: RouterConfig,
    },
};
