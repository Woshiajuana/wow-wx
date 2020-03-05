
const User = require('../plugins/user.plugin');

export default {
    data: {
        user$: '',
    },
    userGet () {
        return User.getToken().then((user$) => {
            this.setData({ user$ });
            return Promise.resolve(user$);
        }).catch((err) => {
            this.setData({ user$: '' });
            return Promise.reject(err);
        })
    },
    userUpdate: User.updateToken.bind(User),
    userLogout: User.logout,
    userLogin: User.login,
    userGetInfo: User.getUserInfo,
}
