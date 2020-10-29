
import Config from 'src/config/wow-wx.config'

export default Object.assign({
    routes: {},
    modalFormatMsg (options) {
        return options.errMsg || options.msg || options.message || JSON.stringify(options);
    }
}, Config);
