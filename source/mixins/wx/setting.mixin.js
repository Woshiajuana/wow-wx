
import Helper from './helper.mixin'

export default {

    /**
     * 获取用户的当前设置。
     * 返回值中只会出现小程序已经向用户请求过的权限。
     * @param options {Object | Boolean} 获取配置，withSubscriptions
     * @return Promise
     * */
    settingGet (options = {}) {
        if (typeof options === 'boolean') {
            options = { withSubscriptions: options };
        }
        return Helper.helperFnPromise('getSetting', options);
    },

    /**
     * 调起客户端小程序设置界面，返回用户设置的操作结果。
     * 设置界面只会出现小程序已经向用户请求过的权限
     * @param options {Object | Boolean} 获取配置，withSubscriptions
     * @return Promise
     * */
    settingOpen (options = {}) {
        if (typeof options === 'boolean') {
            options = { withSubscriptions: options };
        }
        return Helper.helperFnPromise('openSetting', options);
    },

}
