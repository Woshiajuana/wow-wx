
export default {
    APP_ID: 'wx02fc9f802a305886',

    SELF_STORE_ID: '1', // 平台自营 id

    // 商品类型
    GOODS_TYPE: {
        NORMAL: 'NORMAL', // 普通商品
        FLASH: 'FLASH', // 秒杀商品
    },

    // 优惠券状态
    COUPON_STATUS: {
        UNUSED: '0', // 未使用
        USED: '1', // 已使用
        TIMEOUT: '2', // 已过期
    },

    // 收藏类型
    COLLECT_TYPE: {
        GOODS: '1', // 商品
        STORE: '3', // 店铺
    },

    // 订单状态
    ORDER_STATUS: {
        UN_PAY: '1', // 待付款
        UN_SEND: '2', // 待发货
        SEND: '3', // 待收货
        SUCCESS: '4', // 订单完成
        CLOSE: '5', // 关闭
        UN_COMMENT: '6', // 待评价
    },

    // 订单对应的文案
    ORDER_STATUS_TIP: {
        '1': '待付款',
        '2': '待发货',
        '3': '待收货',
        '4': '已完成',
        '5': '已取消',
        '6': '待评价',
    },

    // 订单是否评论
    ORDER_COMMENT_STATUS: {
        UNCOMMENT: '1',
        COMMENT: '2',
    },

    // 订单类型
    ORDER_TYPE: {
        COMMON: '1',
        GROUP: '2',
    },

    // 订单类型 TIP
    ORDER_TYPE_TIP: {
        '1': '普通订单',
        '2': '团购订单',
    },

    // 拼团状态
    GROUP_STATUS: {
        INIT: '1',
        PRE_SUCCESS: '2',
        SUCCESS: '3',
        FAIL: '4',
    },

    // 退款售后订单状态
    ORDER_REFUND_STATUS: {
        INIT: '0',
        ING: '1',
        FINISH: '2',
        REFUSE: '3',
        REFUNDING: '4',
        REVOKE: '5',
    },

    // 退款售后订单状态提示
    ORDER_REFUND_STATUS_TIP: {
        '0': '待处理',
        '1': '退货中',
        '2': '退款完成',
        '3': '已拒绝',
        '4': '退款中',
        '5': '撤销退款',
    },

    // 退款、售后类型
    ORDER_REFUND_TYPE_OPTIONS: [
        // {
        //     label: '换货',
        //     value: '0',
        //     key: 'BARTER',
        // },
        {
            label: '退款',
            value: '1',
            key: 'REFUND',
        },
        // {
        //     label: '退货',
        //     value: '2',
        //     key: 'RETURN_GOOD',
        // },
        {
            label: '退货退款',
            value: '3',
            key: 'RETURN_REFUND',
        },
    ],

    // 退款类型
    ORDER_REFUND_TYPE: {
        BARTER: '0',
        REFUND: '1',
        RETURN_GOOD: '2',
        RETURN_REFUND: '3',
    },

    // 退款类型 tip
    ORDER_REFUND_TYPE_TIP: {
        '0': '换货',
        '1': '退款',
        '2': '退货',
        '3': '退货退款',
    },

    // 商户认证状态
    MERCHANT_STATUS: {
        INIT_0: '0', // 信息未完整
        INIT: '1', // 信息已提交，未提交审核
        REFUSE: '2', // 拒绝
        ADOPT: '3', // 通过
        ORGAUDIT: '4', // 机构审核中
    },

    // 商户认证状态 tip
    MERCHANT_STATUS_TIP: {
        '0': '未认证',
        '1': '审核中',
        '2': '审核失败',
        '3': '已认证',
        '4': '审核中',
    },

    // 商户认证类型
    MERCHANT_CATEGORY: {
        PERSON: {
            category: 'PERSON',
            label: '个人认证',
            tip: '个人',
            icon: 'iconPersonal',
            steps: [
                {
                    label: '商家信息',
                    url: 'merchant_form_business_index',
                },
                {
                    label: '经营信息',
                    url: 'merchant_form_management_index',
                },
            ],
        }, // 个体户
        INDIVIDUAL: {
            category: 'INDIVIDUAL',
            label: '个体户认证',
            tip: '个体户',
            icon: 'iconMerchant',
            steps: [
                {
                    label: '商家信息',
                    url: 'merchant_form_business_index',
                },
                {
                    label: '主体资料',
                    url: 'merchant_form_base_index',
                },
                {
                    label: '经营信息',
                    url: 'merchant_form_management_index',
                },
            ],
        }, // 个体工商户
        ENTERPRISE: {
            category: 'ENTERPRISE',
            label: '企业认证',
            tip: '企业',
            icon: 'iconCompany',
            steps: [
                {
                    label: '商家信息',
                    url: 'merchant_form_business_index',
                },
                {
                    label: '主体资料',
                    url: 'merchant_form_base_index',
                },
                {
                    label: '开户信息',
                    url: 'merchant_form_account_index',
                },
                {
                    label: '经营信息',
                    url: 'merchant_form_management_index',
                },
            ],
        }, // 企业
    },


    // 商户进件银行
    BANK_LIST: [
        { label: '中国银行' },
        { label: '中国建设银行' },
        { label: '中国农业银行' },
        { label: '中国工商银行' },
        { label: '中国交通银行' },
        { label: '招商银行' },
        { label: '浦发银行' },
        { label: '民生银行' },
        { label: '兴业银行' },
        { label: '深发展银行' },
        { label: '华夏银行' },
        { label: '光大银行' },
        { label: '广发银行' },
        { label: '中信银行' },
    ],

    // 快递公司
    EXPRESS_COMPANY: [
        '中通快递',
        '圆通快递',
        '申通快递',
        '韵达快递',
        '天天快递',
        '邮政快递',
        '顺丰快递',
    ],

}
