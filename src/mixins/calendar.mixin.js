
export default {
    data: {
        calendar$: {
            week: [ '日', '一', '二', '三', '四', '五', '六' ],
            arrDate: [],
            curDate: '',
            curYearMonth: '',
            curYear: '',
            curMonth: '',
            curDay: '',
        },
    },
    // 返回月天数
    calendarGetMonthDays (year, month) {
        return new Date(year, month + 1, 0).getDate();
    },
    // 返回星期几
    calendarGetWeekday (year, month, day) {
        return new Date(year, month, day).getDay();
    },
    // 返回年月日
    calendarGetYearMonthDay (date = new Date()) {
        return { year: date.getFullYear(), month: date.getMonth(), months: date.getMonth() + 1, day: date.getDate() };
    },
    // 判断日期是否是今天
    calendarIsToday (str) {
        return new Date().getTime() - new Date(str).getTime() < 86400000;
    },
    // 判断日期是不是未来时间
    calendarIsAfter (str) {
        return new Date(str).getTime() > new Date().getTime();
    },
    // 上一个月
    calendarPreMonth () {
        let { curDate } = this.data.calendar$;
        let [ year, month, day ] = curDate.split('-');
        console.log(new Date(+year, +month - 2).toLocaleDateString());
        this.calendarRender(new Date(+year, month - 1, 0), true);
    },
    // 下一个月
    calendarNextMonth () {
        let { curDate } = this.data.calendar$;
        let [ year, month, day ] = curDate.split('-');
        console.log(new Date(+year, +month + 1, 0).toLocaleDateString());
        this.calendarRender(new Date(+year, +month + 1, 0), true);
    },
    // 渲染
    calendarRender (date = new Date(), type = false) {
        let { calendar$ } = this.data;
        let { year, month, months, day } = this.calendarGetYearMonthDay(date);
        let days = this.calendarGetMonthDays(year, month);
        let preDays = this.calendarGetMonthDays(year, month - 1);
        let firstDayInWeek = this.calendarGetWeekday(year, month, 1);
        if (type && calendar$.curDay) {
            day = +calendar$.curDay > days ? days : +calendar$.curDay;
        }
        let arrDays = [];
        if (firstDayInWeek) {
            let { year: curYear, months: curMonth } = this.calendarGetYearMonthDay(new Date(year, months - 1, 0));
            curYear = curYear.toString();
            curMonth = curMonth < 10 ? `0${curMonth}` : curMonth.toString();
            for (let i = 1; i <= firstDayInWeek; i++) {
                let day = (preDays - firstDayInWeek + i).toString();
                arrDays.push({
                    index: i,
                    year: curYear,
                    month: curMonth,
                    day,
                    date: `${curYear}-${curMonth}-${day}`,
                    status: -1,
                    isSelect: false,
                    isToday: this.calendarIsToday(`${curYear}/${curMonth}/${day}`),
                    isAfter: this.calendarIsAfter(`${curYear}/${curMonth}/${day}`),
                });
            }
        }
        let curYear = year.toString();
        let curMonth = months < 10 ? `0${months}` : months.toString();
        let curDay = day < 10 ? `0${day}` : day.toString();
        let curDate = `${curYear}-${curMonth}-${curDay}`;
        for (let i = 1; i <= days; i++) {
            let curDay = i < 10 ? `0${i}` : i.toString();
            let isAfter = this.calendarIsAfter(`${curYear}/${curMonth}/${curDay}`);
            arrDays.push({
                index: firstDayInWeek + i,
                year: curYear,
                months: curMonth,
                day: curDay,
                date: `${curYear}-${curMonth}-${curDay}`,
                status: 0,
                isSelect: !isAfter && day === i,
                isToday: this.calendarIsToday(`${curYear}/${curMonth}/${curDay}`),
                isAfter,
            });
        }
        let len = arrDays.length;
        let surLen = 42 - len;
        if (surLen) {
            let { year: curYear, months: curMonth } = this.calendarGetYearMonthDay(new Date(year, months + 1, 0));
            curYear = year.toString();
            curMonth = curMonth < 10 ? `0${curMonth}` : curMonth.toString();
            for (let i = 1; i <= surLen; i++) {
                let day = i < 10 ? `0${i}` : i.toString();
                arrDays.push({
                    index: len + i,
                    year: curYear,
                    month: curMonth,
                    day,
                    date: `${curYear}-${curMonth}-${day}`,
                    status: 1,
                    isSelect: false,
                    isToday: this.calendarIsToday(`${curYear}/${curMonth}/${day}`),
                    isAfter: this.calendarIsAfter(`${curYear}/${curMonth}/${day}`),
                });
            }
        }
        calendar$.arrDate = arrDays;
        calendar$.curDate = curDate;
        calendar$.curYearMonth = `${curYear}-${curMonth}`;
        calendar$.curYear = `${curYear}`;
        calendar$.curMonth = `${curMonth}`;
        calendar$.curDay = `${curDay}`;
        this.setData({ calendar$ });
        console.log(this.data.calendar$)
    },
}
