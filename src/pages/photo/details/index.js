//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'source/lib/page'

new WowPage({
    mixins: [
        WowPage.wow$.mixins.Modal,
        WowPage.wow$.mixins.Image,
        WowPage.wow$.mixins.Router,
        WowPage.wow$.mixins.Input,
        WowPage.wow$.mixins.Validate,
    ],
    data: {
        objInput: {
            // 照片
            photo: {
                value: '',
                key: 'objInput.photo',
                use: [ { nonempty: true, prompt: '请选择上传的照片' } ],
            },
            title: {
                value: '',
                key: 'objInput.title',
                use: [ { nonempty: true, prompt: '请填写标题' } ],
            },
            desc: {
                value: '',
                key: 'objInput.desc',
                use: [ { nonempty: true, prompt: '请填写描述' } ],
            },
            nature: {
                value: true,
                key: 'objInput.nature',
            },
        },
    },
    onLoad (options) {
        this.routerGetParams(options);
    },
    handleUpload () {
        this.modalActionSheet([
            '从手机相册选择',
            '拍照'
        ]).then((res) => {
            let sourceType = [['album'], ['camera']];
            return this.imageChoose({ sourceType: sourceType[res.tapIndex] });
        }).then((res) => {
            this.setData({ 'objInput.photo.value': res.tempFilePaths[0] });
        }).toast();
    },
    handleSubmit () {
        let { objInput } = this.data;
        if (this.validateCheck(objInput)) return null;
        let { photo, title, desc, nature } = this.validateInput(objInput);
        let { Http } = this.wow$.plugins;
        Http(Http.API.DO_PHOTO_ADD, {
            filePath: photo,
            name: 'fileToUpload',
            type: 'PHOTO',
        }, {
            useUpLoad: true,
        }).then((res) => {
            photo = res.url;
            return Http(Http.API.DO_PHOTO_ADD, {
                photo,
                title,
                desc,
                nature: nature ? 'PUBLIC' : 'PRIVACY',
            });
        }).then(() => {
            this.modalToast('提交成功');
        }).toast();
    },
});
