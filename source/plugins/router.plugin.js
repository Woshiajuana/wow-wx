
import {
    PluginsConfig
} from '../config'

const {
    path,
    name,
} = PluginsConfig.ROUTER;

console.log(path)
console.log(name)
let cache = {};

function importAll (r) {
    r.keys().forEach(key => cache[key] = r(key));
}

importAll(require.context('./../../example/src/config/', true,  /router.config.js/));

console.log(cache)

let paths = '../../example/src/config/router.config.js'

// let req = require.context('../../example/src/config', true, /\.router.config.js$/)
// console.log(req)
// const ROUTER_CONFIG = require(paths);
//
// console.log(ROUTER_CONFIG)


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
    pop (delta) {
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
    if (key !== 'switchTab') url = `${url}?params=${encodeURIComponent(JSON.stringify(params))}`;
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
