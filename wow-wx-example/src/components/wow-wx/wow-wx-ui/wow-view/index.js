Component({
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        innerText: {
            type: String,
            value: 'default value',
        }
    },
    data: {
        // 这里是一些组件内部数据
        is_iphone_x: false,
        num_padding_top: 30
    },
    attached () {
        this._judgeDevice();
    },
    methods: {

        // 判断设备
        _judgeDevice() {
            wx.getSystemInfo({
                success: res => {
                    let modelmes = res.model;
                    let is_iphone_x = modelmes.search('iPhone X') !== -1;
                    // console.log(this)
                    // this.globalData.is_iphone_x = is_iphone_x;
                    this.setData({
                        num_padding_top: is_iphone_x ? 50 : 30,
                        is_iphone_x,
                    })

                }
            })

        },
    }

});
