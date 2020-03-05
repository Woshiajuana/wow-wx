//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.User,
        WowPage.wow$.mixins.Router,
    ],
    onLoad (options) {
        this.routerGetParams(options);
    },
    handleGetUser (event) {
        let { userInfo } = event.detail;
        if (!userInfo) return null;
        let code;
        let { Modal, Http } = this.wow$.plugins;
        this.userLogin().then((res) => {
            code = res;
            return this.userGetInfo();
        }).then((res) => {
            let { avatarUrl, city, country, gender, language, nickName, province } = userInfo;
            let { encryptedData, iv } = res;
            // return console.log('code', code);
            return Http(Http.API.DO_USER_AUTH, {
                iv,
                code,
                encryptedData,
                avatarUrl,
                city,
                country,
                gender,
                language,
                nickName,
                province,
            }, {
                useAuth: false,
            });
        }).then((res) => {
            return this.userUpdate({ ...userInfo, ...res });
        }).then(() => {
            this.routerRoot('home_index');
        }).catch((err) => {
            if (typeof err === 'object' && err.status === 302) {
                return this.handleGetUser(event);
            }
            Modal.toast(err);
        });
    },
});

