import './project.config.json'
import './app.json'
import './app.scss'
import './wxs/filter.wxs'

import WowApp                       from '../source/index'

let files = require.context('./mixins', false, /.js$/);
files.keys().forEach((key) => {
    let newKey = key.substring(2, key.indexOf('.mixin'));
    WowApp.use(newKey, files(key).default);
});

WowApp({
    mixins: [
        this.wow$.mixins.text,
    ],
    onLaunch () {
        console.log(this.wow$)
    },
    onShow () {

    },
});
