
export const generateAppOptions = (options) => {
    let {
        data,
        mixins,
    } = options;
    if (!mixins || !mixins.length)
        return options;
    let keys = ['onLaunch', 'onShow', 'onHide', 'onError'];
    let target = initTarget();
    delete options.mixins;
    if (!data)
        data = {};
    let mixinData = {};
    let mixinOption = {};
    mixins.forEach((mixin) => {
        if (mixin.data)
            Object.assign(mixinData, mixin.data);
        delete mixin.data;
        mixinTarget(target, mixin, keys);
        Object.assign(mixinOption, mixins);
    });
    mixinTarget(target, options, keys);
    options = Object.assign(mixinOption, options);
    options.data = Object.assign(mixinData, data);
    generateExecutableFn(options, target);
    return options;
};



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
    for (let k in target) {
        source[k] = function (options) {
            target[k].forEach((fn) => {
                fn(options);
            });
        }
    }
    return source;
}


export default {
    generateAppOptions,
};