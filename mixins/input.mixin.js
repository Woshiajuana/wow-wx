

export default {
    inputHandle (event) {
        let { detail, currentTarget } = event;
        let { item, value } = currentTarget.dataset;
        if (typeof value === 'undefined') value = detail.value;
        this.setData({
            [`${item.key}.value`]: value,
        });
        this.inputCallback && this.inputCallback(item, value);
    },
}
