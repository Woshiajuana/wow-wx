export default {
    run () {
        let arr_task = Array.prototype.slice.apply(arguments);
        let index = 0;
        let len = arr_task.length;
        let next = (res) => {
            if(index >= len) return;
            ((i) => {
                arr_task[i](this, res).then((res) => {
                    arr_task[i].success(this, res, next)
                }).catch((err) => {
                    arr_task[i].error(this, err, next)
                });
            })(index);
            index++;
        };
        next();
    },
}
