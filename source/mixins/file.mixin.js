
const File = require('../plugins/file.plugin');

module.exports = {
    fileDownloadFile: File.downloadFile,
    fileSaveFile: File.saveFile,
    fileOpenDocument: File.openDocument,
    fileBase64src: File.base64src,
    fileCanvasToFile: File.canvasToTempFilePath,
};
