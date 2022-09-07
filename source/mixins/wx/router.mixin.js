
import Config from '../../config'

export default {
    data: {
        params$: {},
    },
    routerGetParams (options) {
        let params$ = getParams(options);
        console.log(params$);
        this.setData({ params$ });
    },
    routerPush: (url, params = {}, type = false) => new Promise((resolve, reject) => {
        let key = type ? 'redirectTo' : 'navigateTo';
        handle(url, params, key, resolve, reject)
    }),
    routerRoot: (url, params = {}, type = false) => new Promise((resolve, reject) => {
        let key = type ? 'reLaunch' : 'switchTab';
        handle(url, params, key, resolve, reject)
    }),
    routerPop (delta) {
        wx.navigateBack({delta});
    },

}

function getParams (options) {
    if(!options) return {};
    let {params} = options;
    if(!params) return {};
    return JSON.parse(decodeURIComponent(options.params));
}

function handle(url, params, key, resolve, reject) {
    const RouterConfig = Config.routes;
    url = RouterConfig[url] || url;
    if(key !== 'switchTab')
        url = `${url}?params=${encodeURIComponent(JSON.stringify(params))}`;
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
