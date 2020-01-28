

const App = getApp();

const {
    configs,
    Core,
} = App.wow$;

const {
    FUNCTION_COMPONENT_KEYS,
} = configs;

class WowComponent extends Core {

    constructor (options, filterFun) {
        super(options);
        this.keys = filterFun
            ? filterFun([ ...FUNCTION_COMPONENT_KEYS ])
            : [ ...FUNCTION_COMPONENT_KEYS ];
        Object.assign(this.options, {
            get wow$ () { return App.wow$; },
            get App () { return App },
        });
        this.generate('component');
        return Component(this.options);
    }

    static get wow$ () {
        return App.wow$;
    }

}

module.exports = WowComponent;

