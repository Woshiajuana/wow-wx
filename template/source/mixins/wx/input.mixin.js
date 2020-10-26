
export default {
    inputHandle (event) {
        let { item = '', value, valkey = 'value' } = this.inputParams(event);
        let callValue = value;
        if (typeof item !== 'object')  {
            this.setData({ [item]: value })
        } else {
            let { options, rangeKey, key, contactKey, contactRangeKey } = item;
            if (value !== '') {
                if (options && options.length) {
                    value = typeof value !== 'object' ? options[value] : value;
                    callValue = value;
                }
                if (typeof value === 'object' && contactKey && contactRangeKey) {
                    this.setData({ [`${contactKey}.${valkey}`]: value[contactRangeKey]})
                }
                if (typeof value === 'object' && rangeKey) {
                    value = value[rangeKey];
                }
            }
            this.setData({ [`${key}.${valkey}`]: value});
        }
        this.inputCallback && this.inputCallback(item, callValue, valkey);
    },
    inputParams (event) {
        let { detail = {}, currentTarget = {} } = event;
        let dataset = currentTarget.dataset || {};
        return Object.assign({}, dataset, detail);
    },
    inputEvent (e) {
        let { params, event } = this.inputParams(e);
        if (event) this.triggerEvent(event, params);
    },
};
