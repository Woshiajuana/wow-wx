
import '../utils/es6-promise.util'
import CheckEnv                     from '../utils/check-env.util'
import { generateComponentOptions } from '../utils/generate.util'

CheckEnv();

const App = getApp();

export default (options = {}) => {
    options = generateComponentOptions(options);
    Object.assign(options, { wow$: App.wow$ });
    console.log(options)
    return Page(options);
};
