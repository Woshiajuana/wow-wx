
export default {
    data: {
        objNews: '',
    },
    reqNewsSummaryInfo () {
        this.userGet().then(() => {
            let { Http } = this.wow$.plugins;
            return Http(Http.API.REQ_NEWS_SUMMARY_INFO, {
                Data: true,
            }, {
                loading: false,
            }).then((res) => {
                let { Count } = res;
                this.setData({ objNews: res || {} });
                this.tabbarSetData({ 'list[1].tip': +Count || 0});
            }).toast();
        }).catch(() => {
            this.setData({ objNews: '' });
            this.tabbarSetData({ 'list[1].tip': 0});
        });
    },
}
