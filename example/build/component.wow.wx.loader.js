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
            let value = use_components_obj[key];
            ['.js', '.json', '.wxml', '.wxss'].forEach((item) => {
                let file = `${value}${item}`;
                use_components.push({
                    source_dir: Path.join(this.context, file),
                    output_dir: Path.join(output, file.replace(/(\.\/|\.\.\/)/g, '')),
                });
            });
        }
    }
    console.log(use_components);
    content.use_components = use_components;
    return content;
};
