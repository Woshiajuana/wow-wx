
let _loaderUtils = require('loader-utils');

module.exports = function (sou) {
    let options = (0, _loaderUtils.getOptions)(this) || {};
    let { arr_source, source } = sou;
    console.log(arr_source)


    return ''
};
