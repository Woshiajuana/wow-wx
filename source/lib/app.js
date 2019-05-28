
import '../utils/es6-promise.util'
import CheckEnv                     from '../utils/check-env.util'
import { generateAppOptions }       from '../utils/generate.util'

CheckEnv();

let wow$ = {};

const WowApp = (options = {}) => {
    options = generateAppOptions(options);
    Object.assign(options, { wow$ });
    return App(options);
};

WowApp.use = (target, key, value) => {
    if (!wow$[target])
        wow$[target] = {};
    wow$[target][key] = value;
    return this;
};

let files = require.context('../mixins', false, /.js$/);
files.keys().forEach((key) => {
    let newKey = key.substring(2, key.indexOf('.mixin'));
    WowApp.use('mixins', newKey, files(key).default);
});

WowApp.wow$ = wow$;

export default WowApp;
