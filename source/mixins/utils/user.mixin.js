
const $USER_TOKEN = '$USER_TOKEN';
const Auth = {

    // 获取存储的用户相关信息
    getToken: () => new Promise((resolve, reject) => {
        let userToken = wx.getStorageSync($USER_TOKEN);
        if (userToken) resolve(userToken);
        else reject('userToken is undefined');
    }),

    // 更新存储的用户相关信息
    updateToken (user = {}) {
        let _that = this;
        return new Promise((resolve, reject) => {
            let userToken = {};
            _that.getToken().then((res) => {
                userToken = {
                    ...res,
                    ...user,
                };
            }).catch(() => {
                userToken = user;
            }).finally(() => {
                wx.setStorageSync($USER_TOKEN, userToken);
                resolve(userToken);
            });
        })
    },

    // 退出登录
    logout: (options) => new Promise((resolve, reject) => {
        try {
            wx.removeStorageSync($USER_TOKEN);
            resolve();
        } catch (e) {
            reject('删除失败')
        }
    }),

    // 登录
    login: (options) => new Promise((resolve, reject) => {
        wx.login({
            success: res => {
                let { code, errMsg } = res;
                if (!code) return reject(errMsg);
                resolve(code);
            },
            fail: err => {
                reject(err)
            }
        });
    }),

    // 获取用户信息
    getUserInfo: (options) => new Promise((resolve, reject) => {
        wx.getSetting({
            success: (res) => {
                // if (!res.authSetting['scope.userInfo']) return reject({code: -1, errMsg: 'user no auth'});
                wx.getUserInfo({
                    success: res => {
                        resolve(res);
                    },
                    fail: err => {
                        reject({code: -1, errMsg: 'user no auth'})
                    }
                })
            },
            fail: err => {
                reject({code: -1, errMsg: 'user no auth'})
            }
        });
    }),

    // 获取用户信息
    getUserProfile: (options = {}) => new Promise((resolve, reject) => {
        const fn = wx.getUserProfile || wx.getUserInfo;
        fn({
            desc: '用于完善会员资料',
            ...options,
            success: (res) => {
                resolve(res);
            },
            fail: () => {
                reject('');
            }
        })
    }),
};

export default {
    data: {
        user$: '',
    },
    userGet () {
        return Auth.getToken().then((user$) => {
            this.setData && this.setData({ user$ });
            return Promise.resolve(user$);
        }).catch((err) => {
            this.setData && this.setData({ user$: '' });
            return Promise.reject();
        })
    },
    userUpdate: Auth.updateToken.bind(Auth),
    userLogout: Auth.logout,
    userLogin: Auth.login,
    userGetInfo: Auth.getUserInfo,
    userGetProfile: Auth.getUserProfile,
}
