
export const generateAppOptions = (options) => {
    let {
        data,
        mixins,
    } = options;
    if (!mixins || !mixins.length)
        return options;
    delete options.mixins;
    if (!data)
        data = {};
    let mixinData = {};
    let mixinOption = {};
    mixins.forEach((mixin) => {
        if (mixin.data)
            Object.assign(mixinData, mixin.data);
        delete mixin.data;
        Object.assign(mixinOption, mixins);
    });
    options = Object.assign(mixinOption, options);
    options.data = Object.assign(mixinData, data);
    return options;
};

export default {
    generateAppOptions,
};
