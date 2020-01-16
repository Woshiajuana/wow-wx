
import './app.json'
import WowApp from 'source/lib/app'


const wowApp = new WowApp();

wowApp.init({
    onLaunch(options) {
        console.log('小程序开始加载啦1', options);
        console.log(this);
        console.log('this.wow$ => ', this.wow$);
    }
});


