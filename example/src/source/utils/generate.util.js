
const KEYS = {
    app: ['onLaunch', 'onShow', 'onHide', 'onError'],
    page: ['onLoad', 'onShow', 'onReady', 'onHide', 'onUnload',
        'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage',
        'onPageScroll', 'onResize', 'onTabItemTap'],
    component: [],
};

function generate (options, type) {
    let {
        data,
        mixins,
    } = options;
    if (!mixins || !mixins.length)
        return options;
    let keys = KEYS[type];
    let target = initTarget(keys);
    delete options.mixins;
    if (!data)
        data = {};
    let mixinData = {};
    let mixinOption = {};
    mixins.forEach((mixin) => {
        mixin = Object.assign({}, mixin);
        if (mixin.data)
            Object.assign(mixinData, mixin.data);
        delete mixin.data;
        mixinTarget(target, mixin, keys);
        Object.assign(mixinOption, mixin);
    });
    mixinTarget(target, options, keys);
    if (type === 'component') {
        if (!options.methods) options.methods = {};
        options.methods = Object.assign(mixinOption, options.methods);
    } else {
        options = Object.assign(mixinOption, options);
    }
    options.data = Object.assign(mixinData, data);
    generateExecutableFn(options, target);
    return options;
}

function initTarget (keys) {
    let target = {};
    keys.forEach((key) => {
        target[key] = [];
    });
    return target;
}

function mixinTarget (target, source, keys) {
    for (let k in source) {
        if (keys.indexOf(k) > -1) {
            let fn = source[k];
            target[k].push(fn);
        }
    }
}

function generateExecutableFn (target, source) {
    for (let k in source) {
        let fns = source[k];
        if (fns.length) {
            target[k] = function (options) {
                source[k].forEach((fn) => {
                    fn.bind(this)(options);
                });
            }
        }
    }
}

export const generateAppOptions = (options) => generate(options, 'app');

export const generatePageOptions = (options) => generate(options, 'page');

export const generateComponentOptions = (options) => generate(options, 'component');
