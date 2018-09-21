export default {
    use () {
        let arr_mid = Array.prototype.slice.apply(arguments);
        let index = 0;
        let len = arr_mid.length;
        let next = (res) => {
            if(index >= len) return;
            ((i) => {
                arr_mid[i](this, res).then((res) => {
                    arr_mid[i].success(this, res, next)
                }).catch((err) => {
                    arr_mid[i].error(this, err, next)
                });
            })(index);
            index++;
        };
        next();
    },
}
