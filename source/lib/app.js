
const Core = require('./core');
const { FUNCTION_APP_KEYS } = require('./config');

class WowApp extends Core {
    constructor (options) {
        super(options, FUNCTION_APP_KEYS);
        this.generate(options);
        this.wow$ = {};
        return App(this.options);
    }
}

export default WowApp;
