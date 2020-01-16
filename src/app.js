
import './app.json'
import WowApp from 'source/lib/app'

const wowApp = new WowApp();

const formatKey = (key, cut) => {
    key = key.substring(key.lastIndexOf('/') + 1, key.indexOf(cut));
    return key.substring(0, 1).toUpperCase() + key.substring(1);
};

WowApp.requireDir(require.context('./mixins', true, /\.mixin\.js$/), (key, value) => {
    wowApp.use('mixins', formatKey(key, '.mixin'), value.default || value);
}).requireDir(require.context('./configs', true, /\.config\.js$/), (key, value) => {
    wowApp.use('configs', formatKey(key, '.config'), value.default || value);
}).requireDir(require.context('./plugins', true, /\.plugin\.js$/), (key, value) => {
    wowApp.use('plugins', formatKey(key, '.plugin'), value.default || value);
});

wowApp.init({
    onLaunch(options) {
        console.log('小程序开始加载啦1', options);
        console.log(this);
        console.log('this.wow$ => ', this.wow$);
    }
});


