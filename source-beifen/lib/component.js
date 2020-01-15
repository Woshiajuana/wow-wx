
import '../utils/es6-promise.util'
import CheckEnv                     from '../utils/check-env.util'
import { generateComponentOptions } from '../utils/generate.util'

CheckEnv();

const App = getApp();

const WowComponent = (options = {}) => {
    options = generateComponentOptions(options);
    Object.assign(options, { wow$: App.wow$ });
    return Component(options);
};

WowComponent.wow$ = App.wow$;

export default WowComponent;