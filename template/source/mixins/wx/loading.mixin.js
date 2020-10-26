
import Helper from './helper.mixin'

export default {

    loadingShow (options = { title: '加载中...', mask: true }) {
        wx.showLoading(options)
    },

    loadingHide () {
        wx.hideLoading();
    },

    loadingShowNav () {
        wx.showNavigationBarLoading();
    },

    loadingHideNav () {
        wx.hideNavigationBarLoading();
    },

}
