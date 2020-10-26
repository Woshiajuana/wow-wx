
import Helper from './helper.mixin'

export default {

    /**
     * 下载文件资源到本地
     * */
    fileDownload (options) {
        if (typeof options === 'string') {
            options = { url: options }
        }
        return Helper.helperFnPromise('downloadFile', options);
    },

    /**
     * 保存文件到本地。注意：saveFile 会把临时文件移动，
     * 因此调用成功后传入的 tempFilePath 将不可用
     * */
    fileSave (options) {
        if (typeof options === 'string') {
            options = { tempFilePath: options }
        }
        return Helper.helperFnPromise('saveFile', options);
    },

    /**
     * 新开页面打开文档。微信客户端 7.0.12 版本前默认显示右上角菜单按钮，
     * 之后的版本默认不显示，需主动传入 showMenu
     * */
    fileOpenDocument (options) {
        if (typeof options === 'string') {
            options = { filePath: options }
        }
        return Helper.helperFnPromise('openDocument', options);
    },

    /**
     * base64 保存成文件
     * */
    fileBase64ToSrc: (base64data) => new Promise((resolve, reject) => {
        const [, format, bodyData] = /data:image\/(\w+);base64,(.*)/.exec(base64data) || [];
        if (!format) {
            reject(new Error('ERROR_BASE64SRC_PARSE'));
        }
        const filePath = `${wx.env.USER_DATA_PATH}/tmp_base64src.${format}`;
        const buffer = wx.base64ToArrayBuffer(bodyData);
        wx.getFileSystemManager().writeFile({
            filePath,
            data: buffer,
            encoding: 'binary',
            success() {
                resolve(filePath);
            },
            fail() {
                reject(new Error('ERROR_BASE64SRC_WRITE'));
            },
        });
    }),

    /**
     * 文件转化成图片
     * */
    fileToBase64 (filePath) {
        return new Promise((resolve, reject) => {
            wx.getFileSystemManager().readFile({
                filePath, // 选择图片返回的相对路径
                encoding: 'base64', // 编码格式
                success:(res) =>{
                    resolve(res.data);
                },
                fail: reject
            })
        })
    },

    /**
     * canvas 转文件
     * */
    fileCanvasToSrc: (options) => new Promise((resolve, reject) => {
        if (typeof options === 'string') {
            options = { canvasId: options };
        }
        wx.canvasToTempFilePath({
            success: resolve,
            fail: reject,
            ...options,
        }, this);
    }),

}
