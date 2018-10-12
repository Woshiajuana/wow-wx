let Path = require('path');
let fs = require('fs');
let _loaderUtils = require('loader-utils');

module.exports = function (content) {
    let options = (0, _loaderUtils.getOptions)(this) || {};
    let { arr_source, source } = content;
    console.log(source);
    return content;
};
