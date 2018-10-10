
export default {
    // 深拷贝
    deepCopy () {
        let result = {};
        let argus = Array.of(...arguments);
        function walkFun(res, item) {
            for (let key in item) {
                let value = item[key];
                if (typeof value === 'object') {
                    if (typeof res[key] !== 'object')
                        res[key] = {};
                    walkFun(res[key], value);
                } else {
                    res[key] = value;
                }
            }
        }
        argus.forEach((item) => {
            walkFun(result, item);
        });
        return result;
    }
}
