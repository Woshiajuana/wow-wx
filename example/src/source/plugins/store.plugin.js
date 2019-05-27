
import {
    PluginsConfig
} from '../config'

const {
    storeConfig,
    noUseArr,
} = PluginsConfig.STORE;

const handle = (type, key, value) => new Promise((resolve, reject) => {
    let reg_key = '';
    if (noUseArr.indexOf(key) > -1) reg_key = key;
    else reg_key = storeConfig[key];
    if (!reg_key)
        return reject(`${key} is no register`);
    let result = wx[type](reg_key, value) || '';
    return resolve(result);
});

export default {

    // 获取
    get (key) {
        return handle('getStorageSync', key);
    },

    // 存储
    set (key, value) {
        return handle('setStorageSync', key, value);
    },

    // 删除
    remove (key) {
        return handle('removeStorageSync', key);
    },

    // 清除
    clear: () => new Promise((resolve, reject) => {
        wx.clearStorageSync();
        return resolve();
    }),
}
