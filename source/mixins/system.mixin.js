
const System = require('../plugins/system.plugin');

module.exports = {
    data: {
        system$: wx.getSystemInfoSync(),
    },
    systemGetInfo: System.getInfo,
};
