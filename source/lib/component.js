

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
        // let attached = this.options.attached;
        // Object.assign(this.options, {
        //     get wow$ () { return App.wow$ },
        //     get App () { return App },
        //     attached () {
        //         this.wow$ = App.wow$;
        //         this.App = App;
        //         // 在组件实例进入页面节点树时执行
        //         if (attached) {
        //             attached.apply(this)
        //         }
        //     },
        // });
        this.generate('component');
        return Component(this.options);
    }

    static get wow$ () {
        return App.wow$;
    }

}

module.exports = WowComponent;

