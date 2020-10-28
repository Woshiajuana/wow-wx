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
        WowPage.wow$.mixins.Curl,
    ],
    x: 11111,
    onLoad (options) {
        console.log(this.x);
        console.log('options1 => ', options);
    },
    handleTest1(){
        this.handleTest();
    },
    handleTest() {
        console.log(this.x);
        this.curl(this.data.api$.REQ_TEST, {
            name: 'a',
        }).then((res) => {
            console.log('请求成功 => ', res);
        }).catch((err) => {
            console.log('请求失败 => ', err);
        })
        // this.authScope(this.data.auth$.CAMERA, '执行该操作需要摄像头权限').then((res) => {
        //     console.log('res => ', res);
        // }).catch((err) => {
        //     console.log('err => ', err);
        // });

        // let promise = Promise.resolve();
        // // f(true, 1)();
        // let chain = [
        //     a.bind(this, false, 1),
        //     a.bind(this, true, 2),
            // a.bind(this, true, 3),
            // a.bind(this, true, 4),
            // a.bind(this, true, 5),
            // a.bind(this, true, 6),
        // ];
        // while (chain.length) {
        //     promise = promise.then(chain.shift(), (err) => {
        //         console.log('进入 err', err);
        //         return Promise.reject(err)
        //     });
        // }
        // promise.then(a.bind(this, false, 1), (err) => {
        //     console.log('进入 err1', err);
        //     return Promise.reject(err)
        // }).then(a.bind(this, true, 2),  (err) => {
        //     console.log('进入 err2', err);
        //     return Promise.reject(err)
        // }).then(() => {
        //     console.log('成功')
        // }, err => {
        //
        // }).catch(() => {
        //     console.log('失败')
        // });
        // promise.then(() => {
        //     console.log('成功')
        // }).catch(() => {
        //     console.log('失败')
        // }).finally(() => {
        //     console.log('执行1')
        // }).finally(() => {
        //     console.log('执行2')
        // });

        // promise.then(() => {
        //     console.log('执行成功')
        //     throw new Error('hello');
        // }, (err) => {
        //     console.log('执行失败', err);
        //     return Promise.reject(err)
        // }).then(() => {
        //     console.log('成功')
        // }).catch((err) => {
        //     console.log('失败', err)
        // });
        // promise = new Promise((resolve, rejected) => {
        //     rejected('x')
        // });
        //此时只有then的第二个参数可以捕获到Promise内部抛出的错误信息
        // promise.then(res => {
        //     throw new Error('hello');
        // }, err => {
        //     console.log('1', err);
        // }).then(() => {
        //     console.log('2')
        // }, err => {
        //     console.log('3', err);
        // });

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
