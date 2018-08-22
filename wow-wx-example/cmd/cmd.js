
import copy             from './copy.cmd'
import page             from './page.cmd'
import ip               from './ip.cmd'
import release          from './release.cmd'

const parameters = process.argv.splice(2);
const arr = [
    page,
    copy,
    ip,
    release,
];

(function fireFun(index) {
    arr[index] && arr[index](parameters).then(() => {
        return fireFun(++index);
    })
})(0);
