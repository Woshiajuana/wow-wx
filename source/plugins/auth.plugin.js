
module.exports = {
    authorizeScope: (scope, content = '') => new Promise((resolve, reject) => {
        wx.authorize({
            scope,
            success: (res) => {
                resolve(res);
            },
            fail: () => {
                wx.getSetting({
                    success: (res) => {
                        if (res.authSetting[scope])
                            return resolve(res);
                        wx.showModal({
                            title: '温馨提示',
                            content: content,
                            success: res=>{
                                if (res.confirm) {
                                    wx.openSetting({
                                        success: (res) => {
                                            if (res.authSetting[scope]) return resolve(res);
                                            else reject(res);
                                        },
                                        fail: (err) => {
                                            reject(err);
                                        },
                                    });
                                }
                            }
                        });
                    },
                    fail: err => {
                        reject({ code: -1, errMsg: '您未授权' })
                    }
                });
            }
        });
    }),
};



