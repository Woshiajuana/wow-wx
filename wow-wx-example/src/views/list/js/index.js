import $ from '../../../assets/lib/jquery1.8/jquery-1.8.0'
import Swiper from './swiper.min'

function checkOS() {
    var os = {};
    var ua = (navigator.userAgent || navigator.vendor || window.opera);
    if (ua!=null) {
        var uaName = ua.toLowerCase();
        os = {
            android: /android/i.test(uaName),
            iphone: /iphone/i.test(uaName),
            weixin: /micromessenger/i.test(uaName),
            qq: /qq/i.test(uaName),
        }
    }
    return os
}

$(function () {
    var deviceOS = checkOS();
    if (deviceOS.weixin || deviceOS.qq) {
        if (deviceOS.android || deviceOS.iphone) {
            document.getElementById('prompt').style.display = "block";
        }
    }

})

