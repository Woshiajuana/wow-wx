
import m1 from './mixins1'

export default {

    mixins: [
        m1,
    ],

    onLoad () {
        console.log('created mixins2');
        this.test();
    },

    onReady () {
        console.log('onRead mixins2')
    },

    test1() {
        console.log('test mixins2');
    }

}
