
const Handle = (ctx, next) => new Promise((resolve, reject) => {
    console.log('进入ha中间件');
    resolve();
});

Handle.success = (ctx, res, next) => {
    console.log('ha执行成功');
    next();
};

Handle.error = (ctx, err, next) => {

};

export default () => {
    return Handle;
};
