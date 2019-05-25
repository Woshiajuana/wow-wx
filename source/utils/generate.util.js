
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
    mixins.forEach((mixin) => {
        if (mixin.data)
            Object.assign(data, mixin.data);
        delete mixin.data;
        Object.assign(options, mixins);
    });
    options.data = data;
    return options;
};

export default {
    generateAppOptions,
};
