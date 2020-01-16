
const Core = require('./core');
const { FUNCTION_APP_KEYS } = require('./config');

class WowApp extends Core {

    constructor (options = {}, filterFun) {
        super();
        this.keys = filterFun
            ? filterFun(FUNCTION_APP_KEYS)
            : [ ...FUNCTION_APP_KEYS ];
        this.options = {};
        this.wow$ = {};
    }

    init (options = {}) {
        Object.assign(this.options, options);
        this.generate();
        this.options.wow$ = this.wow$;
        return App(this.options);
    }

    use (target, key, value) {
        if (!wow$[target])
            wow$[target] = {};
        wow$[target][key] = value;
        return this;
    }

    static requireDir () {
        
    }

}

export default WowApp;
