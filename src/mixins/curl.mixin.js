
import Curl from 'source/curl'
import Loading from 'source/mixins/wx/loading.mixin'
import EnvConfig from 'src/config/env.config'
import ApiConfig from 'src/config/api.config'

const curl = new Curl({
    baseUrl: EnvConfig.API_URL,
});

curl.interceptors.request.use((config) => new Promise((resolve, reject) => {
    console.log('请求参数2', config);
    resolve(config);
}));

curl.interceptors.request.use((config) => new Promise((resolve, reject) => {
    console.log('请求参数1', config);
    resolve({...config, xx: 'xxxx'});
}));

curl.interceptors.response.use((response) => new Promise((resolve, reject) => {
    console.log('请求报文', response);
    resolve(response);
}));

export default {

    data: {
        api$: ApiConfig,
    },

    curl (url, data = {}, options = {}) {
        let {
            loading = true,
            navLoading = true,
        } = options;
        if (loading) {
            Loading.loadingShow();
        }
        if (navLoading) {
            Loading.loadingShowNav();
        }
        return curl.request({
            url,
            data,
            ...options,
        }).finally(() => {
            if (loading) {
                Loading.loadingHide();
            }
            if (navLoading) {
                Loading.loadingHideNav();
            }
        });
    },

}
