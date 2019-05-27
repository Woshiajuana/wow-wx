
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


WowApp.use = (key, value) => {
    wow$[key] = value;
    return this;
};



export default WowApp;
