
import Helper from './helper.mixin'

export default {

    /**
     * 拨打电话
     * */
    callPhone (phoneNumber) {
        return Helper.helperFnPromise('makePhoneCall', { phoneNumber }).catch(() => Promise.reject());
    },

}
