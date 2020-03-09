
export default {
    data: {
        strCurKey: '',
    },
    handleFilterTap (event) {
        let { item, key: strKey } = this.inputParams(event);
        let { key, options } = item;
        let { strCurKey } = this.data;
        // if (options.length) {
            return this.setData({ strCurKey: strCurKey === strKey ? '' : strKey });
        // }
    },
    handleAddressCancel (event) {
        this.setData({ strCurKey: '' });
    },
}
