
const Path = require('path');
const fs = require('fs');

module.exports = {
    readable: null,
    writable: null,
    mkDirsSync (dirpath, mode) {
        try
        {
            if (!fs.existsSync(dirpath)) {
                let pathtmp;
                dirpath.split(/[/\\]/).forEach(function (dirname) {  //这里指用/ 或\ 都可以分隔目录  如  linux的/usr/local/services   和windows的 d:\temp\aaaa
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
        // this.mkDirsSync(to);
        let from_stat = fs.statSync(from);
        if (from_stat.isFile()) {
            this.readable = fs.createReadStream(from);       // 创建读取流
            this.writable = fs.createWriteStream(to);      // 创建写入流
            this.readable.pipe(this.writable);
        }
        // this.close();
    },

    close () {
        this.readable && this.readable.close();
        this.writable && this.writable.close();
    },


    start (from, to) {
        console.log(from, to);
        this.copy(from, to)
    },

};
