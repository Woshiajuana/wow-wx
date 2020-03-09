
export default {
    // 分享图片
    onShareAppMessage () {
        return {
            title: '分享',
            path: 'pages/home/index?scene=1', // 点击分享消息是打开的页面
            imageUrl: this.data.strImageTempPath,
            success (res) {
                console.log('分享成功', res);
            },
            fail (err) {
                console.log('分享失败', err);
            }
        };
    },
}
