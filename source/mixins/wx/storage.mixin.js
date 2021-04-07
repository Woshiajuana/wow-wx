
import Helper from './helper.mixin'

export default {

    storageSet (key, data) {
        return Helper.helperFnPromise('setStorage', { key, data });
    },

    storageGet (key) {
        return Helper.helperFnPromise('getStorage', { key }).then((res) => {
            return res ? Promise.resolve(res.data) : Promise.reject();
        }).catch(err => {
            return Promise.reject(err);
        });
    },

    storageRemove (key) {
        return Helper.helperFnPromise('removeStorage', { key });
    },

    storageClear () {
        return Helper.helperFnPromise('clearStorage');
    },

}
