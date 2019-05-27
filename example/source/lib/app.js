
import '../utils/es6-promise.util'
import CheckEnv                     from '../utils/check-env.util'
import {
    generateAppOptions,
    generatePageOptions,
    generateComponentOptions,
}                                   from '../utils/generate.util'

CheckEnv();

let wow$ = {
    generateAppOptions,
    generatePageOptions,
    generateComponentOptions,
};

const WowApp = (options = {}) => {
    options = generateAppOptions(options);
    Object.assign(options, {
        wow$,
    });
    return App(options);
};

// import x from '../../src/mixins'
WowApp.use = (dir, useSubdirectories = false, regExp = /.js$/) => {
    console.log(__dirname)
    let content = require.context('../../src/mixins', useSubdirectories, regExp);
    console.log(content)
};



export default WowApp;
