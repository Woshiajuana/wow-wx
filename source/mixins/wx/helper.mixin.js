

export default {

    /**
     * 将 wx 的方法扩展成 Promise，方便处理
     * @param fn {String | Function}
     * @param options {Object}
     * @return Promise
     * */
    helperFnPromise (fn, options = {}) {
        return new Promise(((resolve, reject) => {
            fn = typeof fn === 'function' ? fn : wx[fn]
            fn({
                ...options,
                success: resolve,
                fail: reject,
            });
        }));
    }

}
