
const Auth = require('../plugins/auth.plugin');

export default {
    data: {
        auth$: {
            userInfo: 'scope.userInfo',
            userLocation: 'scope.userLocation',
            address: 'scope.address',
            invoiceTitle: 'scope.invoiceTitle',
            werun: 'scope.werun',
            record: 'scope.record',
            writePhotosAlbum: 'scope.writePhotosAlbum',
            camera: 'scope.camera',
        },
    },
    authScope: Auth.authorizeScope,
}
