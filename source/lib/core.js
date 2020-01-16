
// 扩展 promise方法
require('./es6-promise');

class Core {

    // options 用户传递的参数
    // keys 需要重写的钩子函数
    constructor(options = {}, keys = []) {
        this.options = options;
        this.keys = keys;
    }

    // 生成参数
    generate (type) {

        let {
            data = {},
            mixins,
        } = this.options;

        // 无混合直接返回用户传递的参数
        if (!mixins || !mixins.length)
            return this.options;

        // 删除多余属性
        delete this.options.mixins;

        // 初始化目标函数
        let target = Core.initTarget(this.keys);

        // 混合数据
        let mixinData = {};
        let mixinOption = {};
        mixins.forEach((mixin) => {
            mixin = Object.assign({}, mixin);
            if (mixin.data)
                Object.assign(mixinData, mixin.data);
            delete mixin.data;
            Core.mixinTarget(target, mixin, keys);
            Object.assign(mixinOption, mixin);
        });
        Core.mixinTarget(target, options, keys);

        if (type === 'component') {
            if (!this.options.methods) this.options.methods = {};
            this.options.methods = Object.assign({}, mixinOption, options.methods);
        } else {
            this.options = Object.assign({}, mixinOption, this.options);
        }
        this.options.data = Object.assign({}, mixinData, data);
        Core.executableTargetFn(this.options, target);
        return this.options;
    }

    // 初始化目标函数
    // 返回目标函数的数组，用来装载混合中的目标函数
    static initTarget (keys) {
         let target = {};
        keys.forEach((key) => target[key] = []);
         return target;
    }

    // 混合目标函数
    static mixinTarget (target, source, keys) {
        for (let k in source) {
            if (keys.indexOf(k) > -1) {
                let fn = source[k];
                target[k].push(fn);
            }
        }
    }

    // 执行混合目标函数
    static executableTargetFn (target, source) {
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

}

module.exports = Core;
