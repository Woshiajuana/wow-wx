//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Input,
        WowPage.wow$.mixins.Router,
        WowPage.wow$.mixins.Jump,
        WowPage.wow$.mixins.User,
        WowPage.wow$.mixins.Validate,
    ],
    data: {
        objEntry: {
            avatar: {
                label: '头像',
                value: '',
                key: 'objEntry.avatar',
                useMargin: true,
                fn: 'handleAvatar'
            },
            nickname: {
                label: '昵称',
                value: '',
                key: 'objEntry.nickname',
                useMargin: true,
                url: 'mine_nickname_index'
            },
            signature: {
                label: '签名',
                value: '',
                key: 'objEntry.signature',
                useMargin: false,
                url: 'mine_signature_index'
            },
            sex: {
                label: '性别',
                value: '0',
                key: 'objEntry.sex',
                useMargin: true,
                rangeKey: 'value',
                labelKey: 'label',
                options: [
                    { label: '保密', value: 0 },
                    { label: '男', value: 1 },
                    { label: '女', value: 2 },
                ],
            },
            qr: {
                label: '名片',
                value: '',
                useMargin: false,
                url: 'mine_qrcode_index'
            },
        },
    },
    onLoad () {
        this.userGet().then(this.assignmentData.bind(this)).null();
    },
    assignmentData () {
        let { user$, objEntry } = this.data;
        let { avatar, avatarUrl, nickname, nickName } = user$;
        this.validateAssignment(this, {
            ...user$,
            avatar: avatar || avatarUrl,
            nickname: nickname || nickName,
        }, objEntry, 'objEntry');
    },
    handleAvatar () {
        this.modalActionSheet([
            '相册',
            '拍照',
        ]).then((res) => {
            console.log(res);
        }).null();
    },
    inputCallback (item, value) {
        if (item.key === 'objEntry.sex') {
            this.doUserUpdate({ sex: value.value });
        }
    },
    doUserUpdate (data) {
        let { Http } = this.wow$.plugins;
        return Http(Http.API.DO_USER_UPDATE, data).then(() => {
            this.modalToast('修改成功');
        }).toast();
    },
});
