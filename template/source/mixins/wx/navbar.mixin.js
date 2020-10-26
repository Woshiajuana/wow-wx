
import Helper from './helper.mixin'

export default {
    navBarSetTitle (options) {
        if (typeof options === 'string') {
            options = { title: options };
        }
        return Helper.helperFnPromise('setNavigationBarTitle', options);
    },
}
