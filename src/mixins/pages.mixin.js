
export default {
    pagesGetByIndex (index = 0) {
        let pages = getCurrentPages();
        return pages[pages.length - 1 - index];
    },
}
