
import { PluginsConfig }                  from '../config'

const { ROUTER_CONFIG } = PluginsConfig;

export default {
    // 跳转页面
    push: (url, params = {}, type = false) => new Promise((resolve, reject) => {
        let key = type ? 'redirectTo' : 'navigateTo';
        handle(url, params, key, resolve, reject)
    }),

    // 回到首页
    root: (url, params = {}, type = false) => new Promise((resolve, reject) => {
        let key = type ? 'reLaunch' : 'switchTab';
        handle(url, params, key, resolve, reject)
    }),

    // 返回
    pop(delta) {
        wx.navigateBack({delta});
    },

    // 获取路由参数
    getParams (options) {
        if (!options) return {};
        let { params } = options;
        if (!params) return {};
        return JSON.parse(decodeURIComponent(params));
    }
}

function handle(url, params, key, resolve, reject) {
    url = ROUTER_CONFIG[url] || '';
    if(key !== 'switchTab') url = `${url}?params=${encodeURIComponent(JSON.stringify(params))}`;
    if (!url) return reject('未找到对应页面');
    wx[key]({
        url,
        success: (e) => {
            resolve(e);
        },
        fail: (e) => {
            reject(e);
        },
    });
}
