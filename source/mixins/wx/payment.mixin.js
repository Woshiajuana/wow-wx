
import Helper from './helper.mixin'

export default {

    /**
     * 微信支付
     * */
    paymentRequest (options) {
        return Helper.helperFnPromise('requestPayment', options);
    },

}
