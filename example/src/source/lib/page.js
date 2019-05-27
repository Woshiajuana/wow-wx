
import '../utils/es6-promise.util'
import CheckEnv                     from '../utils/check-env.util'
import { generatePageOptions }      from '../utils/generate.util'

CheckEnv();

const App = getApp();

let WowPage = (options = {}) => {
    options = generatePageOptions(options);
    Object.assign(options, { wow$: App.wow$ });
    return Page(options);
};

WowPage.wow$ = App.wow$;

export default WowPage;
