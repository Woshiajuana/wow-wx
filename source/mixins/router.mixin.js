
const Router = require('../plugins/router.plugin');

export default {
    data: {
        params$: {},
    },
    routerGetParams (options) {
        let params$ = Router.getParams(options);
        console.log(params$);
        this.setData({ params$ });
    },
    routerPush: Router.push,
    routerRoot: Router.root,
    routerPop: Router.pop,
}
