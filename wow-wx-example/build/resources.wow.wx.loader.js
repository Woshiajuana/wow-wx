
let _loaderUtils = require('loader-utils');
let Cheerio = require('cheerio');

let Resources = function (source, webpack) {
    this.options = (0, _loaderUtils.getOptions)(webpack) || {};
    this.arr_source = [];
    this.source = source;
    return this.query(source, webpack).filter(source, webpack);
};

// 查找
Resources.prototype.query = function (source, webpack) {
    let { use_source, use_image } = this.options;
    if (use_source) this.getSourceDir(webpack);
    if (this.source_dir) this.arr_source.push(this.source_dir);
    if (!use_image) return;
    let $ = Cheerio.load(source);
    $('img').each((index, item) => {
        let src = $(item).attr('src');
        if (src && src.indexOf('./') > -1) this.arr_source.push(src);
    });
    return this;
};

// 过滤
Resources.prototype.filter = function (source, webpack) {
    let { use_filter } = this.options;
    if (use_filter && use_filter.length) {
        this.arr_source.forEach((item, index) => {
            use_filter.forEach((filter) => {
                if (item.indexOf(filter) > -1) this.arr_source.splice(index, 1);
            })
        })
    }
    return this;
};

// 本路径
Resources.prototype.getSourceDir = function (webpack) {
    this.source_dir = webpack.request.substring(webpack.request.indexOf('ref--3!') + 7);
    return this;
};

module.exports = function (source) {
    return new Resources(source, this);
};

