//
// import EnvConfig from 'src/config/env.config'
// import ApiConfig from 'src/config/api.config'
// import Loading from 'source/plugins/loading.plugin'
// import Router from 'source/plugins/router.plugin'
// import Auth from 'source/plugins/user.plugin'
//
// const DEFAULT = {
//     method: 'POST',
//     data: {},
//     useAuth: false, // 没有 token 直接不请求
//     useUpLoad: false,
// };
//
// class Http {
//
//     constructor (api, data, opt) {
//         let options = Object.assign({}, DEFAULT, opt);
//         this.method = options.method.toLocaleUpperCase();
//         this.data = data;
//         this.useAuth = options.useAuth;
//         this.useUpLoad = options.useUpLoad;
//         this.callback = options.callback;
//         this.url = EnvConfig.API_URL + api;
//         return this._fetch();
//     }
//
//     _fetch () {
//         return new Promise((resolve, reject) => {
//             Auth.getToken().then((res) => {
//                 let {
//                     token,
//                 } = res;
//                 if (token) {
//                     this.data = Object.assign({ authorization: token }, this.data);
//                     if (this.callback) {
//                         let extend = this.callback(res) || {};
//                         this.data = Object.assign({}, extend, this.data)
//                     }
//                 }
//             }).catch(() => {}).finally(() => {
//                 if (this.useAuth && !this.data.authorization) {
//                     return reject();
//                 }
//                 this._log('请求参数', this.data);
//                 let key = 'request';
//                 let options = {
//                     data: urlEncode(this.data, null).substring(1),
//                     // data: this.data,
//                     method: this.method,
//                     header: {
//                         "Content-Type": "application/x-www-form-urlencoded"
//                     },
//                 };
//                 if (this.useUpLoad) {
//                     key = 'uploadFile';
//                     options = {
//                         ...this.data,
//                         formData: {
//                             UserId: this.data.UserId,
//                         },
//                         header: {
//                             "Content-Type": "multipart/form-data"
//                         },
//                     };
//                 }
//                 wx[key]({
//                     ...options,
//                     url: this.url,
//                     success: (response) => {
//                         let {
//                             data: respData,
//                             errMsg,
//                             statusCode
//                         } = response;
//                         if (statusCode !== 200 || !respData) {
//                             return reject('网络繁忙，请稍后再试');
//                         }
//                         if (this.useUpLoad && typeof respData === 'string') {
//                             respData = JSON.parse(respData);
//                         }
//                         this._log('请求返回', respData);
//                         let {
//                             code,
//                             data,
//                             msg,
//                         } = respData;
//                         // token 过期
//                         if (code + '' === '888888') {
//                             Auth.logout().finally(() => {
//                                 reject(msg || 'token已过期，请重新登录');
//                                 setTimeout(() => Router.push('login_index'), 1000);
//                             });
//                             return;
//                         }
//                         if (code !== 200) {
//                             return reject(respData);
//                         }
//                         resolve(data);
//                     },
//                     fail: (error) => {
//                         this._log('请求失败', error);
//                         reject(error);
//                     }
//                 });
//             });
//         })
//     }
//
//     _log (str, data) {
//         console.log(`${this.url} ${str} => `, data)
//     }
// }
//
// const fn = (api, data = {}, options = {}) => {
//     let {
//         loading,
//         navLoading,
//     } = options;
//     let useLoading = typeof loading === 'undefined'
//         || loading;
//     let useLoadingNav = typeof navLoading === 'undefined'
//         || navLoading;
//     if (useLoading)
//         Loading.show();
//     if (useLoadingNav)
//         Loading.showNav();
//     return new Http(api, data, options).finally(() => {
//         if (useLoading)
//             Loading.hide();
//         if (useLoadingNav)
//             Loading.hideNav();
//     });
// };
//
// fn.API = Object.assign({}, ApiConfig);
//
// export default fn;
//
// // urlEncode
// function urlEncode(param, key, encode) {
//     if (param === null) return '';
//     let paramStr = '';
//     let t = typeof (param);
//     if (t === 'string' || t === 'number' || t === 'boolean') {
//         paramStr += '&' + key + '='  + ((encode === null || encode) ? encodeURIComponent(param) : param);
//         return paramStr;
//     }
//     for (let i in param) {
//         let k = key === null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
//         paramStr += urlEncode(param[i], k, encode)
//     }
//     return paramStr;
// }


export default {

}
