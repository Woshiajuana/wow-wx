
function curl (config = {}) {
    config = Object.assign({ }, curl.DEFAULT_CONFIG, config);
    return new Promise((resolve, reject) => {
        let reqInterceptors = curl.interceptors.request.interceptors;
        for (let i = 0, len = reqInterceptors.length; i < len; i++) {

        }
        reqInterceptors.forEach((interceptor) => {
            interceptor(resolve, reject);
        });
        let {
            data = {}, // 参数
            fn,
            url,
            timeout,
            responseType,
        } = config;
    });
}

curl.DEFAULT_CONFIG = {
    baseURI: '',
    timeout: 30 * 1000,
    responseType: 'json',
    method: 'POST',
    fn: 'request',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
};

curl.interceptors = {
    request: {
        interceptors: [],
        use (interceptor) {
            this.interceptors.push(interceptor)
        },
    },
    response: {
        interceptors: [],
        use (interceptor) {
            this.interceptors.push(interceptor)
        },
    }
};

curl.get = function(options = {}) {
    return curl(Object.assign({}, options, { method: 'GET' }));
};

curl.post = function (options) {
    return curl(Object.assign({}, options, { method: 'POST' }));
};

curl.upload = function (options) {
    return curl(Object.assign({}, options, { method: 'POST', fn: 'uploadFile' }));
};

// curl.create = function (config = {}) {
//     return function (options = {}) {
//         return curl(Object.assign({}, config, options))
//     }
// };

export default curl;
