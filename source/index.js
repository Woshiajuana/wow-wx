
// import WowApp                       from './lib/app'
// import WowPage                      from './lib/page'
// import WowComponent                 from './lib/component'
//
// export {
//     WowApp,
//     WowPage,
//     WowComponent,
// }

const Generate = require('./utils/generate.util');

let A = {
    data: {
        a: 1,
    },
    a1 () {
        console.log('a1')
    },
    onLaunch (opt) {
        console.log('onLaunch_a', opt)
    }
};

let B = {
    data: {
        b: 1,
    },
    b1 () {
        console.log('b1')
    },
    onLaunch (opt) {
        console.log('onLaunch_b', opt)
    }
};

let options = Generate.generateAppOptions({
    mixins: [A, B],
    data: {
        c: 1,
    },
    c1 () {
        console.log('c1')
    },
    onLaunch (opt) {
        console.log('onLaunch_c', opt)
    }
});

console.log(options);
console.log(options.onLaunch.toString());
options.onLaunch('xxx');
