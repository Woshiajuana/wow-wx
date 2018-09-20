let Path = require('path');
let fs = require('fs');
let _loaderUtils = require('loader-utils');
let copy = {
    readable: null,
    writable: null,
    mkDirsSync (dirpath, mode) {
        try {
            if (!fs.existsSync(dirpath)) {
                let pathtmp;
                dirpath.split(/[/\\]/).forEach((dirname) => {  //这里指用/ 或\ 都可以分隔目录  如  linux的/usr/local/services   和windows的 d:\temp\aaaa
                    if (pathtmp) {
                        pathtmp = Path.join(pathtmp, dirname);
                    } else {
                        pathtmp = dirname;
                    }
                    if (!fs.existsSync(pathtmp)) {
                        if (!fs.mkdirSync(pathtmp, mode)) {
                            return false;
                        }
                    }
                });
            }
            return true;
        } catch(e) {
            return false;
        }
    },
    copy (from, to) {
        let from_stat = fs.statSync(from);
        if (from_stat.isFile()) {
            this.readable = fs.createReadStream(from);       // 创建读取流
            this.writable = fs.createWriteStream(to);      // 创建写入流
            this.readable.pipe(this.writable);
        }
    },
    close () {
        this.readable && this.readable.close();
        this.writable && this.writable.close();
    },
    start (from, to) {
        this.copy(from, to)
    },
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
    arr_result.forEach((item) => {
        let { source_dir, output_dir } = item;
        copy.start(source_dir, output_dir);
    });
    return ''
};
