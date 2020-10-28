
import Curl from 'source/curl'
import Loading from 'source/mixins/wx/loading.mixin'
import User from 'source/mixins/utils/user.mixin'
import EnvConfig from 'src/config/env.config'
import ApiConfig from 'src/config/api.config'

const curl = new Curl({
    baseURI: EnvConfig.API_URL,
});

// 日志输出
curl.interceptors.request.use((config) => new Promise((resolve, reject) => {
    let { url, method, data } = config;
    console.log(`${url} ${method} 请求参数 => `, data);
    resolve(config);
}));

// 先判断是否需要 token
curl.interceptors.request.use((config) => new Promise((resolve, reject) => {
    let {
        data,
        useToken = true,
        extend,
    } = config;
    User.userGet().then((res) => {
        let {
            token,
        } = res;
        if (token && useToken) {
            data = Object.assign({ authorization: token }, data);
        }
        if (typeof extend === 'function') {
            data = Object.assign(data, (extend(res) || {}));
        }
        config.data = data;
    }).catch(() => {}).finally(() => {
        if (useToken && !data.authorization) {
            return reject();
        }
    });
    resolve(config);
}));

curl.interceptors.response.use((response) => new Promise((resolve, reject) => {
    let { requestConfig, statusCode } = response;
    let { url, method } = requestConfig;
    console.log(`${url} ${method} 请求返回 => `, data);
    resolve(response);
}));

export default {

    data: {
        api$: ApiConfig,
    },

    curl (url, data = {}, options = {}) {
        let {
            loading = true,
            navLoading = true,
        } = options;
        if (loading) {
            Loading.loadingShow();
        }
        if (navLoading) {
            Loading.loadingShowNav();
        }
        return curl.request({
            ...options,
            url,
            data,
        }).finally(() => {
            if (loading) {
                Loading.loadingHide();
            }
            if (navLoading) {
                Loading.loadingHideNav();
            }
        });
    },

}
