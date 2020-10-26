
export default {

    // 平台首页内容
    REQ_HOME_CONTENT: 'api/homeplus/query',

    // 店铺首页内容
    REQ_HOME_STORE_CONTENT: 'api/homeplus/store/query',

    // 商品分类查询
    REQ_CLASSIFY_LIST: 'api/category/query',

    // 根据类目查询商品
    REQ_GOODS_LIST_BY_CLASSIFY: 'api/product/query/bycategory',

    // 秒杀时间段查询
    REQ_SEC_KILL_TIME_SLOT: 'api/flash/query/session',

    // 秒杀列表
    REQ_SEC_KILL_LIST: 'api/flash/query',

    // 查询店铺列表
    REQ_STORE_LIST: 'api/store/query',

    // 查询专题列表
    REQ_SPECIAL_LIST: 'api/subject/query',

    // 查询专题详情
    REQ_SPECIAL_INFO: 'api/subject/query/detail',

    // 提交专题评论
    DO_SPECIAL_COMMENT_SUBMIT: 'api/subject/submit/comment',

    // 查询拼团列表
    REQ_GROUP_LIST: 'api/group/list',

    // 商品列表查询
    REQ_GOODS_LIST: 'api/product/query/list',

    // 商品详情查询
    REQ_GOODS_INFO: 'api/product/query',

    // 商品 SKU 查询
    REQ_GOODS_INFO_BY_SKU: 'api/product/query/sku',

    // 登录
    DO_USER_LOGIN: 'api/user/login',

    // 团购商品查询
    REQ_GROUP_GOODS_INFO: 'api/product/group/query',

    // 团购商品 SKU 查询
    REQ_GROUP_GOODS_INFO_BY_SKU: 'api/product/query/group/sku',

    // 用户信息查询
    REQ_USER_INFO: 'api/user/query',

    // 优惠券领取
    DO_COUPON_RECEIVE: 'api/user/add/coupon',

    // 优惠券列表查询
    REQ_COUPON_LIST: 'api/user/query/coupon',

    // 用户收藏商品查询
    REQ_COLLECT_GOODS_LIST: 'api/user/query/favgood',

    // 用户收藏店铺查询
    REQ_COLLECT_STORE_LIST: 'api/user/query/favstore',

    // 浏览历史查询
    REQ_HISTORY_LIST: 'api/user/query/history',

    // 浏览历史删除
    DO_HISTORY_DELETE: 'api/user/delete/history',

    // 购物车添加
    DO_SHOP_CART_ADDED: 'api/shopcart/add',

    // 购物车列表查询
    REQ_SHOP_CART_LIST: 'api/shopcart/query',

    // 购物车删除
    DO_SHOP_CART_DELETE: 'api/shopcart/delete',

    // 收藏接口 （商品 or 店铺）
    DO_COLLECT_ADDED: 'api/user/add/favorite',

    // 取消收藏（商品 or 店铺）
    DO_COLLECT_DELETE: 'api/user/delete/favorite',

    // 收货地址列表
    REQ_ADDRESS_LIST: 'api/address/list',

    // 收货地址设置默认
    DO_ADDRESS_DEFAULT: 'api/address/address-set-default',

    // 删除收货地址
    DO_ADDRESS_DELETE: 'api/address/delete',

    // 收货地址添加 or 修改
    DO_ADDRESS_ADDED_UPDATE: 'api/address/save',

    // 购物车总数查询
    REQ_SHOP_CART_TOTAL: 'api/shopcart/query/total',

    // 店铺详情
    REQ_STORE_INFO: 'api/store/query/detail',

    // 订单优惠劵查询
    REQ_ORDER_COUPON_INFO: 'api/order/coupon/query',

    // 拼团订单优惠劵查询
    REQ_ORDER_GROUP_COUPON_INFO: 'api/order/group/coupon/query',

    // 拼团订单提交
    DO_ORDER_GROUP_SUBMIT: 'api/order/group/submit',

    // 订单提交
    DO_ORDER_SUBMIT: 'api/order/submit',

    // 订单查询
    REQ_ORDER_LIST: 'api/order/query',

    // 订单删除
    DO_ORDER_DELETE: 'api/order/delete',

    // 订单确认
    DO_ORDER_CONFIRM: 'api/order/confirm',

    // 订单评论
    DO_ORDER_COMMENT: 'api/order/comment',

    // 订单关闭
    DO_ORDER_CLOSE: 'api/order/close',

    // 图片上传
    DO_IMAGE_UPLOAD: 'api/file/upload',

    // 查询商品评论列表
    REQ_GOODS_COMMENT_LIST: 'api/product/query/comment',

    // 查询拼团用户列表
    REQ_GROUP_USER_LIST: 'api/group/query/user/list',

    // 关联订单查询付款
    DO_ORDER_RELATION_INFO: 'api/order/query/relation',

    // 检测用户是否参加了拼团
    DO_GROUP_CHECK: 'api/group/check/group',

    // 查询拼团详情
    REQ_GROUP_INFO: 'api/group/query/detail',

    // 查询拼团订单详情 (废弃，订单详情就会查出数据)
    // REQ_ORDER_GROUP_INFO: 'api/group/query',

    // 帮助中心
    REQ_HELP_LIST: 'api/help/query',

    // 意见反馈
    DO_FEEDBACK_SUBMIT: 'api/help/report',

    // 退款申请 被 批量申请退款 替代（20201012）
    // DO_REFUND_SUBMIT: 'api/refund/apply',

    // 退款列表
    REQ_REFUND_LIST: 'api/refund/query/list',

    // 退款详情
    REQ_REFUND_INFO: 'api/refund/query/detail',

    // 入驻店铺查询分类
    REQ_STORE_CLASSIFY_LIST: 'api/category/store/query',

    // 入驻店铺根据分类查询商品
    REQ_STORE_GOODS_LIST_BY_CLASSIFY: 'api/product/query/class',


    // 20200927 新增商户认证功能
    // 商户信息提交
    DO_MERCHANT_BUSINESS_SUBMIT: 'api/merchant/add',

    // 经营信息提交
    DO_MERCHANT_MANAGEMENT_SUBMIT: 'api/merchant/add/legal',

    // 主体资料信息提交
    DO_MERCHANT_BASE_SUBMIT: 'api/merchant/add/main',

    // 开户信息提交
    DO_MERCHANT_ACCOUNT_SUBMIT: 'api/merchant/add/open',

    // 补充资料提交
    DO_MERCHANT_SUPPLEMENT_SUBMIT: 'api/merchant/supplement',

    // 商户查询
    REQ_MERCHANT_INFO: 'api/merchant/query',

    // 用户商户账号登录绑定
    DO_USER_ACCOUNT_BIND: 'api/sysuser/bind',

    // 用户商户账号注册
    DO_USER_ACCOUNT_REGISTER: 'api/sysuser/reg',

    // 用户短信功能
    DO_SMS_SEND: 'api/sms/send',

    // 用户解绑商户账号
    DO_USER_ACCOUNT_UNBIND: 'api/sysuser/unbind',

    // 商户订单查询
    REQ_MERCHANT_ORDER_LIST: 'api/merchant/order/query',

    // 商户退款订单查询
    REQ_MERCHANT_REFUND_ORDER_LIST: 'api/merchant/order/refund/apply/query',

    // 商户退款审核
    DO_MERCHANT_REFUND_EXAMINE: 'api/merchant/order/return/refund/audit',

    // 商户订单发货
    DO_MERCHANT_DELIVER_GOODS: 'api/merchant/order/send',

    // 商户订单详情查询
    REQ_MERCHANT_ORDER_INFO: 'api/merchant/order/query/detail',

    // 商户退款订单详情查询
    REQ_MERCHANT_REFUND_ORDER_INFO: 'api/merchant/order/refund/apply/query/detail',

    // 商户地址查询
    REQ_MERCHANT_ADDRESS_LIST: 'api/merchant/address/query',

    // 商户地址删除
    DO_MERCHANT_ADDRESS_DELETE: 'api/merchant/address/delete',

    // 商户地址添加 OR 更新
    DO_MERCHANT_ADDRESS_ADDED_UPDATE: 'api/merchant/address/add',

    // 商户订单 brade
    REQ_MERCHANT_ORDER_BADGE_INFO: 'api/merchant/order/query/mark',

    // 商户退款
    DO_MERCHANT_REFUND_GOODS: 'api/merchant/order/refund/confirm',

    // 商户基础信息查询
    REQ_MERCHANT_BASE_INFO: 'api/merchant/query/base',

    // 商户基础信息修改
    DO_MERCHANT_BASE_UPDATE: 'api/merchant/base/modify',


    // 20201012 需求优化
    // 购物车商品数量更新
    DO_SHOP_CART_UPDATE: 'api/shopcart/update/num',

    // 批量申请退款
    DO_REFUND_BATCH_SUBMIT: 'api/refund/batch/apply',

    // 退款撤销
    DO_REFUND_REVOKE: 'api/refund/cancel',

    // 退款发货
    DO_REFUND_DELIVER_GOODS: 'api/refund/delivery',

    // 追加评论
    DO_ORDER_REVIEW_COMMENT: 'api/order/review',

    // 订单详情查询
    REQ_ORDER_INFO: 'api/order/query/detail',

    // 分享二维码
    REQ_QR_CODE_INFO: 'api/user/app/share',

}
