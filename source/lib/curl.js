//
// function curl (config = {}) {
//     config = Object.assign({ }, curl.DEFAULT_CONFIG, config);
//     return new Promise((resolve, reject) => {
//         let reqInterceptors = curl.interceptors.request.interceptors;
//         for (let i = 0, len = reqInterceptors.length; i < len; i++) {
//
//         }
//         reqInterceptors.forEach((interceptor) => {
//             interceptor(resolve, reject);
//         });
//         let {
//             data = {}, // 参数
//             fn,
//             url,
//             timeout,
//             responseType,
//         } = config;
//     });
// }
//
// function run () {
//
// }
//
// curl.DEFAULT_CONFIG = {
//     baseURI: '',
//     timeout: 30 * 1000,
//     responseType: 'json',
//     method: 'POST',
//     fn: 'request',
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//     },
// };
//
// curl.interceptors = {
//     request: {
//         interceptors: [],
//         use (interceptor) {
//             this.interceptors.push(interceptor)
//         },
//     },
//     response: {
//         interceptors: [],
//         use (interceptor) {
//             this.interceptors.push(interceptor)
//         },
//     }
// };
//
// curl.get = function(options = {}) {
//     return curl(Object.assign({}, options, { method: 'GET' }));
// };
//
// curl.post = function (options) {
//     return curl(Object.assign({}, options, { method: 'POST' }));
// };
//
// curl.upload = function (options) {
//     return curl(Object.assign({}, options, { method: 'POST', fn: 'uploadFile' }));
// };
//
// // curl.create = function (config = {}) {
// //     return function (options = {}) {
// //         return curl(Object.assign({}, config, options))
// //     }
// // };
//
// export default curl;


function interceptorsManner (){
    this.handler = [];
}

interceptorsManner.prototype.use = function(fulfilled, rejected){
    this.handler.push({
        fulfilled: fulfilled,
        rejected: rejected
    });
};

function Curl () {

    this.interceptors = {
        //两个拦截器
        request: new interceptorsManner(),
        response: new interceptorsManner()
    }

}

Curl.prototype.request = function () {
    // 这儿的undefined是为了补位，因为拦截器的返回有两个
    let chain = [dispatchRequest, undefined];
    let promise = Promise.resolve();
    // 将两个拦截器中的回调加入到chain数组中
    this.interceptors.request.handler.forEach((interceptor)=>{
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.handler.forEach((interceptor)=>{
        chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    while(chain.length){
        // promise.then的链式调用，下一个then中的chain为上一个中的返回值，每次会减去两个
        // 这样就实现了在请求的时候，先去调用请求拦截器的内容，再去请求接口，返回之后再去执行响应拦截器的内容
        promise = promise.then(chain.shift(), chain.shift());
    }
};

["get","post","delete"].forEach((method) => {
    Curl.prototype[method] = function (url, config = {}) {
        return this.request(Object.assign({}, config, {
            method,
            url,
        }));
    };
});
