
import Helper from './helper.mixin'

export default {

    storageSet (key, data) {
        return Helper.helperFnPromise('setStorage', { key, data });
    },

    storageGet (key) {
        return Helper.helperFnPromise('getStorage', { key }).then((res) => {
            const data = res ? res.data : null;
            data ? Promise.resolve(data) : Promise.reject();
        });
    },

    storageRemove (key) {
        return Helper.helperFnPromise('removeStorage', { key });
    },

    storageClear () {
        return Helper.helperFnPromise('clearStorage');
    },

}
