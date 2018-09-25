
export const Handle = (ctx, res) => new Promise((resolve, reject) => {
    console.log('进入text中间件');
    console.log('text参数', res);
    resolve('text过来的参数是1');
});

Handle.success = (ctx, res, next) => {
    console.log('text执行成功');
    next(res);
};

Handle.error = (ctx, err, next) => {
    console.log('text执行失败');
    next(err);
};

export default {

};
