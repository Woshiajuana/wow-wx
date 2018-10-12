let Path = require('path');
let fs = require('fs');
let _loaderUtils = require('loader-utils');

module.exports = function (content) {
    let options = (0, _loaderUtils.getOptions)(this) || {};
    let { arr_source, source } = content;
    let { output, entry } = options;
    let use_components_obj = JSON.parse(source).usingComponents;
    let use_components = [];
    if (use_components_obj) {
        for (let key in use_components_obj) {
            use_components.push(use_components_obj[key]);
        }
    }
    console.log(use_components);
    return content;
};
