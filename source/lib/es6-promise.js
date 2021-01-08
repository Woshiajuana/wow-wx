
Promise.prototype.toast = function () {
    return this.catch(err => {
        let { Modal } = getApp().wow$.mixins;
        if (Modal) Modal.toast(err);
    });
};

Promise.prototype.null = function () {
    return this.catch(err => {
        console.log(err);
    });
};

Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};
