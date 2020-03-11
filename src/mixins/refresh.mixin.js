
export default {

    data: {
        numIndex: 1,
        numSize: 10,
        numTotal: 0,
        arrData: '',
    },

    // 下拉刷新
    onPullDownRefresh () {
        this.handleRefresh && this.handleRefresh(() => setTimeout(() => {
            wx.stopPullDownRefresh();
        }, 500));
    },

    // 刷新
    handleRefresh (callback) {
        this.setData({ numIndex: 1 });
        this.reqDataList(callback);
    },

    // 获取数据
    reqDataList (callback) {
        let { Http } = this.wow$.plugins;
        let { numIndex, numSize, arrData } = this.data;
        let { url, options = {} } = this.getReqUrlOrOption();
        Http(url, {
            numIndex,
            numSize,
            ...options,
        }, {
            loading: typeof callback !== 'function',
        }).then((res) => {
            let { total, list } = res;
            this.setData({
                numTotal: total,
                arrData: numIndex === 1 ? list : [...arrData, ...list],
            });
        }).toast().finally(() => {
            typeof callback === 'function' && callback();
        });
    },

    // 上拉加载更多
    onReachBottom () {
        let { numIndex, numTotal, arrData } = this.data;
        if (arrData.length >= numTotal)
            return console.log('数据加载已完毕');
        numIndex++;
        this.setData({ numIndex });
        this.reqDataList();
    },


}
