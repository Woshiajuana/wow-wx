
const Core = require('./core');
const {
    FUNCTION_APP_KEYS,
    FUNCTION_COMPONENT_KEYS,
    FUNCTION_PAGE_KEYS,
} = require('./config');

class WowApp extends Core {

    constructor (options = {}, filterFun) {
        super();
        this.keys = filterFun
            ? filterFun([ ...FUNCTION_APP_KEYS ])
            : [ ...FUNCTION_APP_KEYS ];
        this.options = {};
        this.wow$ = { get Core () { return Core } };
        this.use('configs', 'FUNCTION_APP_KEYS', FUNCTION_APP_KEYS);
        this.use('configs', 'FUNCTION_COMPONENT_KEYS', FUNCTION_COMPONENT_KEYS);
        this.use('configs', 'FUNCTION_PAGE_KEYS', FUNCTION_PAGE_KEYS);
    }

    // 初始化
    init (options = {}) {
        let that = this;
        Object.assign(this.options, options, {
            get wow$ () { return that.wow$ }
        });
        this.generate();
        return App(this.options);
    }

    // 使用
    use (target, key, value) {
        if (!this.wow$[target])
            this.wow$[target] = {};
        this.wow$[target][key] = value;
        return this;
    }

    // static requireDir (dir, bool, rex ) {
    //     let files = require.context(dir, false, /.js$/);
    //     files.keys().forEach((key) => {
    //         let newKey = key.substring(2, key.indexOf('.mixin'));
    //         WowApp.use('mixins', newKey, files(key).default);
    //     });
    // }

}

module.exports = WowApp;
