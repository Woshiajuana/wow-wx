
// 格式化数据
const formatOptions = (options) => {
    let text;
    if (typeof title === 'object') {
        text = options.title || options.errMsg || options.Message || options.message || JSON.stringify(options);
    } else {
        text = options + '';
        options = {};
    }
    return {
        text,
        options,
    }
};

// 小程序 提示模块
const toast = (options) => {
    let { text: title, options: opt } = formatOptions(options);
    console.log('小程序提示 => ', options);
    if (title === '') return null;
    wx.showToast({
        duration: 3000,
        icon: 'none',
        mask: true,
        title,
        ...opt,
    });
};

// 小程序 模态对话框
const confirm = (options) => new Promise((resolve, reject) => {
    let { text: content, options: opt } = formatOptions(options);
    wx.showModal({
        title: '温馨提示',
        content,
        success: res => {
            res.confirm ? resolve(res) : reject(res);
        },
        fail: err => {
            reject(err);
        },
        ...opt,
    });
});

// 显示操作菜单
const actionSheet = (options) => new Promise((resolve, reject) => {
    wx.showActionSheet({
        ...options,
        success: res => {
            resolve(res);
        },
        fail: err => {
            reject(err);
        },
    });
});

module.exports = {
    toast,
    confirm,
    actionSheet,
};
