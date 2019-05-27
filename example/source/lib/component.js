
import '../utils/es6-promise.util'
import CheckEnv                     from '../utils/check-env.util'
import { generateComponentOptions } from '../utils/generate.util'

CheckEnv();

export default (options = {}) => {
    options = generateComponentOptions(options);
    return Component(options);
};
