
export default {
    jumpPageOrFireFn (event) {
        let { url, params, item, auth } = this.inputParams(event);
        let { url: itemUrl, fn } = item || {};
        if (typeof auth !== 'undefined' && !auth) {
            return this.routerPush();
        }
        if (url || itemUrl) {
            return this.routerPush(url || itemUrl, params || item || {});
        }
        if (fn) {
            return this[fn](item);
        }
    },
}
