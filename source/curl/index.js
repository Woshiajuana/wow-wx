
function InterceptorsManner () {
    this.handlers = [];
}

InterceptorsManner.prototype.use = function (handler) {
    // this.handlers.push({ fulfilled: fulfilled, rejected: rejected });
    this.handlers.push(handler);
    return this.handlers.length - 1;
};

InterceptorsManner.prototype.eject = function eject (id) {               //移除一个拦截器 id:该拦截器的索引
    if (this.handlers[id]) {
        this.handlers.splice(id, 1);
    }
};

const DEFAULTS = {
    baseURI: '',
    fn: 'request',
    method: 'POST',
    timeout: 30 * 1000,
    dataType: 'json',
};

function Index (config = {}) {
    this.interceptors = {
        //两个拦截器
        request: new InterceptorsManner(),
        response: new InterceptorsManner()
    };
    this.defaults = Object.assign({}, DEFAULTS, config);
}

Index.prototype.request = function (config = {}) {
    config = Object.assign({ }, this.defaults, config);
    let { baseURI, url, fn, data = {} } = config;
    if (!url.startsWith('http')) {
        config.url = baseURI + url;
    }
    if (fn === 'uploadFile') {
        if (!config.header) {
            config.header = {};
        }
        config.header['Content-Type'] = 'multipart/form-data';
        config.formData = data;
    }
    let dispatchRequest = (options) => new Promise((resolve, reject) => {
        wx[fn]({ ...options, success: (res) => resolve({ ...res, requestConfig: config }), fail: (err) => reject({ ...err, requestConfig: config }) });
    });
    let chain = [ dispatchRequest ];
    let promise = Promise.resolve(config);
    // 将两个拦截器中的回调加入到chain数组中
    this.interceptors.request.handlers.forEach((interceptor) => {
        // chain.unshift(interceptor.fulfilled, interceptor.rejected);
        chain.unshift(interceptor);
    });
    this.interceptors.response.handlers.forEach((interceptor) => {
        // chain.push(interceptor.fulfilled, interceptor.rejected);
        chain.push(interceptor);
    });
    while (chain.length){
        // promise.then的链式调用，下一个then中的chain为上一个中的返回值，每次会减去两个
        // 这样就实现了在请求的时候，先去调用请求拦截器的内容，再去请求接口，返回之后再去执行响应拦截器的内容
        // promise = promise.then(chain.shift(), chain.shift());
        promise = promise.then(chain.shift());
    }
    return promise;
};

['get', 'post', 'upload'].forEach((method) => {
    Index.prototype[method] = function (url, config = {}) {
        return this.request(Object.assign({}, config, { method: method.toLocaleUpperCase(), url, fn: method === 'upload' ? 'uploadFile' : 'request' }));
    };
});

export default Index;
