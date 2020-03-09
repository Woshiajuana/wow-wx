
import EnvConfig from 'src/config/env.config'
import ApiConfig from 'src/config/api.config'

let Modal, Loading, Router, Auth;

const DEFAULT = {
    method: 'POST',
    data: {},
    useAuth: true,
    useUpLoad: false,
};

class Http {

    constructor (api, data, opt) {
        let options = Object.assign({}, DEFAULT, opt);
        this.method = options.method.toLocaleUpperCase();
        this.data = data;
        this.useAuth = options.useAuth;
        this.useUpLoad = options.useUpLoad;
        this.url = EnvConfig.API_URL + api;
        return this._fetch();
    }

    _fetch () {
        return new Promise((resolve, reject) => {
            let objUser = '';
            Auth.getToken().then((res) => {
                objUser = res;
            }).catch(() => {}).finally(() => {
                this._log('请求参数', this.data);
                let key = 'request';
                let data = {
                    data: this.data,
                    method: this.method,
                    header: {
                        'access-token': objUser.accessToken || ''
                    },
                };
                if (this.useUpLoad) {
                    key = 'uploadFile';
                    data = {
                        ...this.data,
                        formData: {
                            UserId: this.data.UserId,
                        },
                        header: {
                            "Content-Type": "multipart/form-data",
                            'access-token': objUser.accessToken || '',
                        },
                    };
                }
                wx[key]({
                    ...data,
                    url: this.url,
                    success: (response) => {
                        let {
                            errMsg,
                            statusCode,
                            data: respData,
                        } = response;
                        if (statusCode !== 200 || !respData) {
                            return reject(`网络繁忙，请稍候再试(${statusCode})`);
                        }
                        this._log('请求返回', respData);
                        let {
                            code,
                            msg,
                            data,
                        } = respData;
                        if (['F40000', 'F40001', 'F40002', 'F40003'].indexOf(code) > -1) {
                            return Auth.logout().finally(() => Router.root('home_index'));
                        }
                        if (code !== 'S00000') {
                            return reject(msg);
                        }
                        resolve(data);
                    },
                    fail: (error) => {
                        this._log('请求失败', error);
                        reject(error);
                        Modal.toast(error);
                    }
                });
            });
        })
    }

    _log (str, data) {
        console.log(`${this.url} ${str} => `, data)
    }
}

const fn = (api, data = {}, options = {}) => {
    const { plugins } = getApp().wow$;
    Modal = plugins.Modal;
    Loading = plugins.Loading;
    Router = plugins.Router;
    Auth = plugins.User;
    let {
        loading,
        navLoading,
    } = options;
    let useLoading = typeof loading === 'undefined'
        || loading;
    let useLoadingNav = typeof navLoading === 'undefined'
        || navLoading;
    if (useLoading)
        Loading.show();
    if (useLoadingNav)
        Loading.showNav();
    return new Http(api, data, options).finally(() => {
        if (useLoading)
            Loading.hide();
        if (useLoadingNav)
            Loading.hideNav();
    });
};

fn.API = Object.assign({}, ApiConfig);

export default fn;
