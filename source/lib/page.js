

const App = getApp();

const {
    configs,
    Core,
} = App.wow$;

const {
    FUNCTION_PAGE_KEYS,
} = configs;

class WowPage extends Core {

    constructor (options, filterFun) {
        super(options);
        this.keys = filterFun
            ? filterFun([ ...FUNCTION_PAGE_KEYS ])
            : [ ...FUNCTION_PAGE_KEYS ];
        Object.assign(this.options, {
            get wow$ () { return App.wow$; },
            get App () { return App },
        });
        this.generate();
        return Page(this.options);
    }

}

module.exports = WowPage;

