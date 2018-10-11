import Config                       from 'config/env.config'
import RouterConfig                 from 'config/router.config'
import StoreConfig                  from 'config/store.config'

let {
    SOURCE_BASE_URL
} = Config;

// 工具配置
export const UtilConfig = {
    SOURCE_BASE_URL,
};

// 插件配置
export const PluginsConfig = {

    // 路由配置模块
    ROUTER: {
        routerConfig: RouterConfig,
    },

    // 存储配置模块
    STORE: {
        storeConfig: StoreConfig,
    }
};
