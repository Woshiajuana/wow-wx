
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

WowApp.use = (key, value) => {
    wow$[key] = value;
    return this;
};

WowApp.wow$ = wow$;

let files = require.context('../mixins', false, /.js$/);
files.keys().forEach((key) => {
    let newKey = key.substring(2, key.indexOf('.mixin'));
    WowApp.use(newKey, files(key).default);
});

export default WowApp;
