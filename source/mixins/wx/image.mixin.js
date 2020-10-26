
import Helper from './helper.mixin'

export default {

    /**
     * 选择图片
     * */
    imageChoose (options = {}) {
        return Helper.helperFnPromise('chooseImage', Object.assign({
            count: 1,
            sizeType: ['original', 'compressed'],  // 可选择原图或压缩后的图片
            sourceType: ['album', 'camera'], // 可选择性开放访问相册、相机
        }, options)).catch(() => Promise.reject());
    },

    /**
     * 图片保存
     * */
    imageSave (options) {
        if (typeof options === 'string') {
            options = { filePath: options };
        }
        return Helper.helperFnPromise('saveImageToPhotosAlbum', options).catch(() => Promise.reject());
    },

    /**
     * 图片预览
     * */
    imagePreview (options) {
        return Helper.helperFnPromise('previewImage', options);
    },

    /**
     * 图片下载
     * */
    imageDownload (options) {
        if (typeof options === 'string') {
            options = { src: options }
        }
        return Helper.helperFnPromise('getImageInfo', options);
    },

}
