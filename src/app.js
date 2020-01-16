
import './app.json'
import WowApp from 'source/lib/app'


new WowApp({
    onLaunch(options) {
        console.log('小程序开始加载啦1', options)
    }
});
