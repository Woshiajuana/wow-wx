
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

    if (type === 'getStorageSync') {
        let value = wx[type](reg_key) || '';
        return resolve(value);
    }

    if (type === 'setStorageSync') {
        let value = wx[type](reg_key) || '';
        return resolve(value);
    }


    let value = wx[fun](reg_key) || '';
    return resolve(value);
});

export default {

    // 获取
    get: (key) => new Promise((resolve, reject) => {
        let reg_key = '';
        if (noUseArr.indexOf(key) > -1) reg_key = key;
        else reg_key = storeConfig[key];
        if (!reg_key)
            return reject(`${key} is no register`);
        let value = wx.getStorageSync(reg_key) || '';
        return resolve(value);
    }),

    // 存储
    set: (key, value) => new Promise((resolve, reject) => {
        let reg_key = '';
        if (noUseArr.indexOf(key) > -1) reg_key = key;
        else reg_key = storeConfig[key];
        if (!reg_key)
            return reject(`${key} is no register`);
        wx.setStorageSync(reg_key, value);
        return resolve(value);
    }),

    // 删除
    remove: (key) => new Promise((resolve, reject) => {
        let reg_key = '';
        if (noUseArr.indexOf(key) > -1) reg_key = key;
        else reg_key = storeConfig[key];
        if (!reg_key)
            return reject(`${key} is no register`);
        wx.removeStorageSync(reg_key);
        return resolve();
    }),

    // 清除
    clear: () => new Promise((resolve, reject) => {
        wx.clearStorageSync();
        return resolve();
    }),
}
