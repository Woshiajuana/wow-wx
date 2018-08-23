const Path = require('path');
var _loaderUtils = require("loader-utils");

module.exports = function (source, params1, params2) {

    var options = (0, _loaderUtils.getOptions)(this) || {};

    var copy = options.copy;
    var dir = this.request.substring(this.request.indexOf('ref--3!') + 7);
    dir = dir.substring(dir.indexOf('src') + 3);
    var copy_dir = dir;
    dir = Path.join(__dirname, '../src', dir);
    copy_dir = Path.join(__dirname, '../dist', copy_dir);
    console.log(dir);
    console.log(copy_dir);
    copy.start(dir, copy_dir);
    // console.log(this.context)
    // console.log(this.request)
    // 处理 source ...
    return '';
};
