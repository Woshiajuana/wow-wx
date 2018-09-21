let Path = require('path');
let fs = require('fs');
let _loaderUtils = require('loader-utils');

const Copy = function (from, to) {
    this.readable = null;
    this.writable = null;
    this.from = from;
    this.to = to;
};

Copy.prototype.file = function (from, to) {
    try {
        if (fs.existsSync(to)) return;
        let path_tmp = '';
        let arr_path = to.split(Path.sep);
        arr_path.forEach((dir, index) => {
            path_tmp = path_tmp ? Path.join(path_tmp, dir) : dir;
            if (index === arr_path.length - 1){
                this.readable = fs.createReadStream(from);       // 创建读取流
                this.writable = fs.createWriteStream(to);      // 创建写入流
                this.readable.pipe(this.writable);
            } else
            if (!fs.existsSync(path_tmp)) {
                fs.mkdirSync(path_tmp)
            }
        });
    } catch (e) {
        console.log(e);
    }
    return this;
};

Copy.prototype.close = function () {
    this.readable && this.readable.close();
    this.writable && this.writable.close();
};

module.exports = function (content) {
    let options = (0, _loaderUtils.getOptions)(this) || {};
    let { arr_source, source } = content;
    let { output, entry } = options;
    let arr_result = [];
    arr_source.forEach((item, index) => {
        if (item.indexOf('./') > -1) {
            arr_result.push({
                source_dir: Path.join(this.context, item),
                output_dir: Path.join(output, item.replace(/(\.\/|\.\.\/)/g, '')),
            })
        } else {
            arr_result.push({
                source_dir: item,
                output_dir: output + item.replace(entry, '')
            })
        }
    });
    console.log(arr_result);
    arr_result.forEach((item) => {
        let { source_dir, output_dir } = item;
        new Copy().file(source_dir, output_dir);
    });
    return ''
};
