//index.js
import './index.json'
import './index.scss'
import './index.wxml'
import WowPage from 'source/lib/page'

new WowPage({
    onLoad(options) {
        console.log('首页加载 => ', options);
        console.log('首页执行wow$ =>', this.wow$);
    }
});
