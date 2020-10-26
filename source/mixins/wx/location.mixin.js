
import Helper from './helper.mixin'

export default {

    /**
     * 获取位置信息
     * */
    locationGet (options) {
        return Helper.helperFnPromise('getLocation', options);
    }

}
