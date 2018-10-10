
export default {
    // 深拷贝
    deepCopy () {
        let result = {};
        let args = Array.of(arguments);
        function walkFun(obj, arr = args) {
            arr.forEach(() => {

            })
        }
        walkFun(obj,args, result);
        return result;
    }
}
