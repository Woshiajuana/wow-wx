
export default {
    jumpPageOrFireFn (event) {
        let { url, params, item, auth, tel, fn, async } = this.inputParams(event);
        let { url: itemUrl, fn: itemFn, tel: itemTel, async: itemAsync } = item || {};
        const fireFn = () => {
            if (typeof auth !== 'undefined' && !auth) {
                return this.routerPush('auth_index');
            }
            if (url || itemUrl) {
                return this.routerPush(url || itemUrl, params || item || {});
            }
            if (fn || itemFn) {
                return this[fn ? fn : itemFn](item || params);
            }
            if (tel || itemTel) {
                return wx.makePhoneCall({ phoneNumber: tel || itemTel});
            }
        };
        if (async || itemAsync) {
            return this.userGet().then(() => {
                fireFn();
            }).catch(this.routerPush.bind(this, 'auth_index'));
        }
        fireFn();
    },
}
