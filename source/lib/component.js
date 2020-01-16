

const App = getApp();

const {
    configs,
    Core,
} = App.wow$;

const {
    FUNCTION_COMPONENT_KEYS,
} = configs;

class WowPage extends Core {

    constructor (options, filterFun) {
        super(options);
        this.keys = filterFun
            ? filterFun([ ...FUNCTION_COMPONENT_KEYS ])
            : [ ...FUNCTION_COMPONENT_KEYS ];
        Object.assign(this.options, {
            get wow$ () { return App.wow$; },
            get App () { return App },
        });
        this.generate();
        return Component(this.options);
    }

}

module.exports = WowPage;

