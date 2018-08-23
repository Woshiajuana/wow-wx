import WowCool                          from 'wow-cool'
import FsExtra                          from 'fs-extra'
import Path                             from 'path'
import AppJson                          from './../src/app.json'
import log                              from './../tools/log.tool'

class Generate {

    constructor () {
        this.router = {};
        this.pages = [];
    }

    loopDirectory () {
        let _that = this;
        (function walk(dir) {
            dir = dir || '.';
            let directory = Path.join(__dirname, '../src/pages', dir);
            FsExtra.readdirSync(directory).forEach( (file) => {
                let full_path = Path.join(directory, file);
                let stat = FsExtra.statSync(full_path);
                let ext_name = Path.extname(full_path);
                if (stat.isFile() && ext_name === '.wxml') {
                    let file_path = Path.join(dir, Path.basename(file, ext_name));
                    let file_path_arr = file_path.replace(/\\/g, '/').split('\/');
                    let file_path_name_arr = _that._unique(file_path_arr);
                    let name = file_path_name_arr.join('_');
                    let p = 'pages/' +file_path_arr.join('/');
                    _that.pages.push(p);
                    _that.router[name] = '/' + p;
                } else if (stat.isDirectory()) {
                    let sub_dir = Path.join(dir, file);
                    walk(sub_dir);
                }
            })
        })();
        return this;
    }

    _unique (array) {
        let n = [];
        for(let i = 0; i < array.length; i++){
            if (n.indexOf(array[i]) === -1) n.push(array[i]);
        }
        return n;
    }

    start () {
        AppJson.pages = this.pages;
        log(`即将生成app.json`);
        FsExtra.createWriteStream('./src/app.json',{defaultEncoding:'utf8'});
        FsExtra.writeFileSync('./src/app.json', JSON.stringify(AppJson, null, 4));
        FsExtra.ensureDirSync(`./src/config`);
        FsExtra.createWriteStream('./src/config/router.config.js',{defaultEncoding:'utf8'});
        FsExtra.writeFileSync(`./src/config/router.config.js`, 'module.exports = ' + JSON.stringify(this.router, null, 4));
        log(`生成app.json操作完成`);
        return this;
    }

}

export default((arr_parameter) => new Promise((resolve, reject) => {
    let num_app_index = WowCool.findFirstIndexForArr(arr_parameter, (item) => {
        return item === '--page' || item === '-p';
    });
    if (num_app_index) return resolve();
    const generate = new Generate();
    generate.loopDirectory().start();
    return resolve();
}));







