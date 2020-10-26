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
        console.log('options => ', options);
    },
    handleTest1(){
    },
    handleTest () {
        this.authScope(this.data.auth$.CAMERA, '执行该操作需要摄像头权限').then((res) => {
            console.log('res => ', res);
        }).catch((err) => {
            console.log('err => ', err);
        });



        // a(false, '执行第一步').then(() => {
        //     return a(true, '执行第二步');
        // }).catch(() => {
        //     return a(true, '重新执行第一步');
        // }).then(() => {
        //     console.log('执行成功')
        // }).then(() => {
        //     console.log('执行成功1')
        // }).catch(() => {
        //     console.log('执行失败')
        // }).then(() => {
        //     console.log('执行成功2')
        // }).catch(() => {
        //     console.log('执行失败3')
        // }).then(() => {
        //     console.log('执行成功4')
        // });;

    },
});

const x = {
    authorizeScope: (scope, content = '') => new Promise((resolve, reject) => {
        wx.authorize({
            scope,
            success: (res) => {
                console.log('xxxx')
                resolve(res);
            },
            fail: () => {
                wx.getSetting({
                    success: (res) => {
                        if (res.authSetting[scope])
                            return resolve(res);
                        wx.showModal({
                            title: '温馨提示',
                            content: content,
                            success: res=>{
                                if (res.confirm) {
                                    wx.openSetting({
                                        success: (res) => {
                                            if (res.authSetting[scope]) return resolve(res);
                                            else reject(res);
                                        },
                                        fail: (err) => {
                                            reject(err);
                                        },
                                    });
                                }
                            }
                        });
                    },
                    fail: err => {
                        reject({ code: -1, errMsg: '您未授权' })
                    }
                });
            }
        });
    }),
}
function a(type = true, msg) {
    return new Promise((resolve, reject) => {
        console.log(msg);
        if (type) {
            resolve()
        } else {
            reject()
        }
    });
}


function b(type = true) {
    return new Promise((resolve, reject) => {
        console.log('执行了函数 B');
        if (type) {
            resolve()
        } else {
            reject()
        }
    });
}
