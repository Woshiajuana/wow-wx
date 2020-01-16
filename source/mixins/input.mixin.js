
module.exports = {
    inputHandle (e) {
        let {
            detail,
            currentTarget
        } = e;
        let { item, value } = currentTarget.dataset;
        if (typeof value === 'undefined') value = detail.value;
        typeof item === 'object' ? this.setData({ [`${item.key}.value`]: value}) : this.setData({ [item]: value });
        this.inputCallback && this.inputCallback(item, value);
    }
};
