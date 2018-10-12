let Path = require('path');
let fs = require('fs');
let fs_extra = require('fs-extra');
let _loaderUtils = require('loader-utils');

module.exports = function (content) {
    let options = (0, _loaderUtils.getOptions)(this) || {};
    let { arr_source, source } = content;
    let { output, entry } = options;
    let obj_source = JSON.parse(source);
    let usingComponents = obj_source.usingComponents || {};
    let useComponents = obj_source.useComponents;
    let use_components = [];
    if (useComponents) {
        usingComponents = {
            ...usingComponents,
            ...useComponents,
        };
        for (let key in useComponents) {
            let value = useComponents[key];
            value = value.substring(value.indexOf('/components'));
            !obj_source.usingComponents && (obj_source.usingComponents = {});
            obj_source.usingComponents[key] = value;
        }
        console.log(this.resource);
        fs_extra.writeFileSync(this.resource, JSON.stringify(obj_source, null, 4));
    }
    console.log(obj_source);
    if (usingComponents) {
        for (let key in usingComponents) {
            let value = usingComponents[key];
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
