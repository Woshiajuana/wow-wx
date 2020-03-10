
export default {
    data: {
        calendar$: {
            week: [ '日', '一', '二', '三', '四', '五', '六' ],
            arrArrData: [],
        },
    },
    calendarRender (date = new Date()) {
        let { calendar$ } = this.data;
        let arrArrData = [];
        for (let i = 0; i < 7; i++) {
            let arrData = [];
            for (let i = 0; i < 7; i++) {
                arrData.push(i);
            }
            arrArrData.push(arrData);
        }
        calendar$.arrArrData = arrArrData;

        let year = date.getFullYear();
        let day = date.getDate();

        console.log('day => ', day);

        let month = date.getMonth() ;
        let months = date.getMonth() + 1;

        let lastDay = new Date(year, months, 0);

        console.log('lastDay => ', lastDay);

        let preLastDay = new Date(year, month, 0);

        console.log('preLastDay => ', preLastDay);

        let firstDay = new Date(year, month, 1);
        firstDay = firstDay.getDay();

        console.log('firstDay => ', firstDay);

        this.setData({ calendar$ });
        console.log(arrArrData);
    },
}
