
import {
    PluginsConfig
} from '../config'

const {
    routerConfig,
} = PluginsConfig.ROUTER;


const handle = (key, url, params) => new Promise((resolve, reject) => {
    let options = {};
    options.url = routerConfig[url] || '';
    if (!options.url && key !== 'navigateBack')
        return reject('no page found');
    if (params && typeof params !== 'object')
        return reject('params must be object');
    if (key === 'navigateBack') {
        options.delta = url;
        delete options.url;
    } else if (key !== 'switchTab' && params)
        options.url = `${options.url}?params=${encodeURIComponent(JSON.stringify(params))}`;
    wx[key]({
        ...options,
        success: (e) => {
            resolve(e);
        },
        fail: (e) => {
            reject(e);
        },
    });
});

export default {

    // 跳转页面
    push (options, params) {
        let key = options.close ? 'redirectTo' : 'navigateTo';
        let url = options.url || options;
        return handle(key, url, params);
    },

    // 关闭所有页面回到某个页面
    root (options, params) {
        let key = options.close ? 'reLaunch' : 'switchTab';
        let url = options.url || options;
        return handle(key, url, params);
    },

    // 返回
    pop (delta) {
        return handle('navigateBack', delta);
    },

    // 获取路由参数
    getParams (options) {
        if (!options) return {};
        let { params } = options;
        if (!params) return {};
        return JSON.parse(decodeURIComponent(params));
    }
}
