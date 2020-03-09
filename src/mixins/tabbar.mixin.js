
export default {
    tabbarSetSelected (index) {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({ selected: index });
        }
    },
    tabbarSetData (data) {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData(data);
        }
    },
}
