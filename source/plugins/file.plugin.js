
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
}
