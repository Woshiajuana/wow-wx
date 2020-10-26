
export default {
    modalFormatMsg (options) {
        return options.errMsg || options.msg || options.message || JSON.stringify(options);
    },
}
