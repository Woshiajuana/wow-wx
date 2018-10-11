
import StorePlugin                      from '../plugins/store.plugin'

export default {

    data: {
        auth$: {},
    },

    authGet: () => new Promise((resolve, reject) => {
        let userToken = wx.getStorageSync($USER_TOKEN);
        if (userToken) resolve(userToken);
        else reject('userToken is undefined');
    }),
}
