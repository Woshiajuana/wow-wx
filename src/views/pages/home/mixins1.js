
export default {

    mixins: [
        getApp().wow$.mixins.User,
        getApp().wow$.mixins.Curl,
    ],

    onLoad () {
        console.log('created mixins1');
        this.test();
        this.userGet().then((res) => {
            console.log('成功 => ', res);
        }).catch((err) => {
            console.log('错误 => ', err);
        });
    },

    onReady () {
        console.log('onRead mixins1')
    },

    test() {
        console.log('test mixins1');
    }

}
