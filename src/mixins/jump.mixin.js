
export default {
    jumpPageByUrl (event) {
        let { url, params = {} } = this.inputParams(event);
        this.routerPush(url, params);
    },
}
