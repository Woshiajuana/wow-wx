
export const Handle = (ctx, res) => new Promise((resolve, reject) => {
    console.log('进入ha中间件');
    console.log('参数', res);
    resolve();
});

Handle.success = (ctx, res, next) => {
    console.log('ha执行成功');
    next();
};

Handle.error = (ctx, err, next) => {

};

export default {

};
