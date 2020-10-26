
import Helper from './helper.mixin'
import Setting from './setting.mixin'
import Modal from './modal.mixin'

export default {

    data: {
        auth$: {
            USER_INFO: 'scope.userInfo', // 用户信息
            USER_LOCATION: 'scope.userLocation', // 地理位置
            USER_LOCATION_BACKGROUND: 'scope.userLocationBackground', // 后台定位
            WE_RUN: 'scope.werun', // 微信运动步数
            RECORD: 'scope.record', // 录音
            WRITE_PHOTOS_ALBUM: 'scope.writePhotosAlbum', // 保存到相册
            CAMERA: 'scope.camera', // 摄像头
        },
    },

    /**
     * 授权某个操作
     * @param scope {String} auth$的值
     * @param content {String} 提示
     * @return Promise
     * */
    authScope (scope, content = '') {
        return new Promise((resolve, reject) => {
            Helper.helperFnPromise('authorize', {
                scope,
            }).then((res) => {
                resolve(res);
            }).catch((err) => {
                if (!content) {
                    return reject();
                }
                Modal.modalConfirm(content).then(() => {
                    return Setting.settingOpen();
                }).then((res) => {
                    res.authSetting[scope] ? resolve(res) : reject();
                }).catch((err) => {
                    reject(err);
                });
            });
        });

    },

}
