
module.exports = {
    inputHandle (event) {
        let { item, value } = this.inputParams(event);
        typeof item === 'object' ? this.setData({ [`${item.key}.value`]: value}) : this.setData({ [item]: value });
        this.inputCallback && this.inputCallback(item, value);
    },
    inputParams (event) {
        let { detail, currentTarget } = event;
        let dataset = currentTarget.dataset || {};
        return Object.assign({}, dataset, detail);
    },
    inputEvent (e) {
        let { params, event } = this.inputParams(e);
        if (event) this.triggerEvent(event, params);
    },
};
