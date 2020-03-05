
const handle = (options = {}, key) => new Promise((resolve, reject) => {
    wx[key]({
        ...options,
        success: res => {
            resolve(res);
        },
        fail: err => {
            reject(err);
        },
    })
});

module.exports = {
    downloadFile: (options = {}) => handle(options, 'downloadFile'),
    saveFile: (options = {}) => handle(options, 'saveFile'),
    openDocument: (options = {}) => handle(options, 'openDocument'),
    base64src: (base64data) =>  new Promise((resolve, reject) => {
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
    canvasToTempFilePath: (options) => new Promise((resolve, reject) => {
        let canvasId = '';
        if (typeof options === 'string') {
            canvasId = options;
            options = {};
        }
        wx.canvasToTempFilePath({
            canvasId,
            ...options,
            success (res) {
                resolve(res);
            },
            fail (res) {
                reject(res);
            }
        });
    }),
};
