import './project.config.json'
import './app.json'
import './app.scss'
import './wxs/filter.wxs'

import WowApp                       from './source/index'

let files = require.context('./mixins', false, /.js$/);
files.keys().forEach((key) => {
    let newKey = key.substring(2, key.indexOf('.mixin'));
    WowApp.use('mixins', newKey, files(key).default);
});

console.log(WowApp.wow$)

WowApp({
    mixins: [
        WowApp.wow$.mixins.text,
    ],
    onLaunch () {
        console.log('app => ', this.data.text)
    },
    onShow () {

    },
});
