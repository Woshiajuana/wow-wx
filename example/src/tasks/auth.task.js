
import AuthPlugin                   from '../../../source/plugins/auth.plugin'

export const Handle = (ctx, res) => new Promise((resolve, reject) => {
    AuthPlugin.getToken().then((info) => {
        resolve(info);
    }).catch(() => {
        reject('你还未登录，请先去登录')
    })
});

Handle.success = (ctx, res, next) => {
    console.log('ha执行成功');
    next();
};

Handle.error = (ctx, err, next) => {

};

export default {

};
