
const RouterPlugin = require('./../../plugins/router.plugin');


Page({
    data: {

    },
    bindViewTap (e) {
        RouterPlugin.push('add').then(() => {
            console.log('成功');
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            console.log(1)
        });
    }
});

export default {
    methods: {
        test () {
            return new Promise(() => {

                console.log(0)
            }).then(() => {
                console.log(1)
            }).catch(() => {

                console.log(2)
            }).finally(() => {

            })
        }
    }
}
