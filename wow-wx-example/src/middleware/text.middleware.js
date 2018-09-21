
const Handle = (ctx) => new Promise((resolve, reject) => {
    console.log('进入text中间件');
    reject();
});

Handle.success = (ctx, res, next) => {
    console.log('text执行成功');
    next();
};

Handle.error = (ctx, err, next) => {
    console.log('text执行失败');
    next();
};

export default () => {
    return Handle;
};
