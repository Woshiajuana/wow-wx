//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Auth,
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Clipboard,
    ],
    onLoad (options) {
        console.log('options1 => ', options);
    },
    handleTest1(){
        this.handleTest();
    },
    handleTest(onfulfilled) {
        // this.authScope(this.data.auth$.CAMERA, '执行该操作需要摄像头权限').then((res) => {
        //     console.log('res => ', res);
        // }).catch((err) => {
        //     console.log('err => ', err);
        // });

        let promise = Promise.resolve();
        // f(true, 1)();
        let chain = [
            () => console.log(0),
            a.bind(this, false, 1),
            () => console.log(-1),
            a.bind(this, true, 2),
            a.bind(this, true, 3),
            a.bind(this, true, 4),
            a.bind(this, true, 5),
            a.bind(this, true, 6),
        ];
        while (chain.length) {
            promise = promise.then(chain.shift(), (err) => {
                console.log('进入 err', err);
                return Promise.reject(err)
            });
        }
        promise.then(() => {
            console.log('成功')
        }).catch(() => {
            console.log('失败')
        });
        // promise.then(a(true, '1')).then(() => {
        //     console.log('成功')
        // }).catch(() => {
        //     console.log('失败')
        // });
    },
});

function f(type, msg) {
    return a.bind(this, type, msg);
}

function a(type, msg) {
    return new Promise((resolve, reject) => {
        console.log(msg);
        type ? resolve() : reject();
    });
}
