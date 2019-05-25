
import '../utils/es6-promise.util'
import CheckEnv                     from '../utils/check-env.util'
import { generateAppOptions }       from '../utils/generate.util'

CheckEnv();

export default (options = {}) => {
    options = generateAppOptions(options);
    return App(options);
};
