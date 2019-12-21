
import Auth                         from '../plugins/auth.plugin'

export default {
    data: {
        user$: {},
    },
    userGet () {
        return Auth.getToken().then((user$) => {
            this.setData({ user$ });
            return Promise.resolve(user$);
        }).catch((err) => {
            return Promise.reject(err);
        })
    },
    userUpdate: Auth.updateToken.bind(Auth),
    userLogout: Auth.logout,
    userLogin: Auth.login,
    userGetInfo: Auth.getUserInfo,
}
