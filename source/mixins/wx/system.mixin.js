
import Helper from './helper.mixin'

module.exports = {
    data: {
        system$: wx.getSystemInfoSync(),
    },
    systemGetInfo () {
        return Helper.helperFnPromise('getSystemInfo');
    },
    systemGetRpx (w = 750) {
        let { system$ } = this.data;
        system$.rpx = system$.windowWidth / w;
        this.setData({ system$ });
    },
};
