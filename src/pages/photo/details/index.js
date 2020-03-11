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
                url: '',
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
        this.assignmentData();
    },
    assignmentData () {
        let { params$, objInput } = this.data;
        let { imgUrl, _id, nature, photo } = params$;
        wx.setNavigationBarTitle({ title: _id ? '修改照片' : '定格照片' });
        if (!_id) return null;
        this.validateAssignment(this, {
            ...params$,
            photo: photo._id,
            nature: nature === 'PUBLIC',
        }, objInput, 'objInput');
        this.setData({ 'objInput.photo.url': imgUrl });
    },
    // 上传图片
    handleUpload () {
        this.modalActionSheet([
            '从手机相册选择',
            '拍照'
        ]).then((res) => {
            let sourceType = [['album'], ['camera']];
            return this.imageChoose({ sourceType: sourceType[res.tapIndex] });
        }).then((res) => {
            let { Http } = this.wow$.plugins;
            return Http(Http.API.DO_IMAGE_UPLOAD, {
                filePath: res.tempFilePaths[0],
                name: 'fileToUpload',
                type: 'PHOTO',
            }, {
                useUpLoad: true,
            });
        }).then((res) => {
            let { file, url } = res;
            this.setData({
                'objInput.photo.value': file,
                'objInput.photo.url': url,
            });
        }).toast();
    },
    // 提交
    handleSubmit () {
        let { objInput, params$ } = this.data;
        if (this.validateCheck(objInput)) return null;
        let options = this.validateInput(objInput);
        let { Http } = this.wow$.plugins;
        let { _id, date } = params$;
        let url = Http.API.DO_PHOTO_ADD;
        if (_id) {
            options.id = params$._id;
            url = Http.API.DO_PHOTO_UPDATE;
        } else {
            options.created_at = date;
        }
        Http(url, {
            ...options,
            nature: options.nature ? 'PUBLIC' : 'PRIVACY',
        }).then(() => {
            this.modalToast('提交成功');
        }).toast();
    },
});
