
export default {

    /**
     * 检测手机号
     * */
    regularCheckPhone: value => /^1\d{10}$/.test(value),

    /**
     * 检测身份证
     * */
    regularCheckIDCard: value => /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(value),

    /**
     * 检测银行卡
     * */
    regularCheckBankCard: value => /^(\d{16}|\d{18}|\d{19})$/.test(value),

    /**
     * 检测邮箱
     * */
    regularCheckEmail: value => /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value),

    /**
     * 金额
     * */
    regularCheckMoney: value => /^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$/.test(value),

    /**
     * 检测中文
     * */
    regularCheckText: value => /^[\d\w\u4e00-\u9fa5]{1,12}$/.test(value),

    /**
     * 检测正整数
     * */
    regularCheckPositiveInteger: value => /^[0-9]+$/.test(value),

}
