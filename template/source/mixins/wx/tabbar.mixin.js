

import Helper from './helper.mixin'

export default {
    tabBarBadgeShow (options) {
        return Helper.helperFnPromise('setTabBarBadge', options);
    },
    tabBarBadgeHide (options) {
        return Helper.helperFnPromise('removeTabBarBadge', options);
    }
}
