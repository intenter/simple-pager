module.exports = {
    getPagerModel: function getPagerModel(currPage, totalPages, options) {
        options = options ? options : {surroundWith:1};
        var model = [{page:currPage, current:true}];
        var testPage;
        var i;

        for (i=0; i<options.surroundWith; i++) {
            testPage = currPage + i + 1;
            if (testPage <= totalPages) {
                model.push({page:testPage});
            } else {
                break;
            }
        }

        for (i=0; i<options.surroundWith; i++) {
            testPage = currPage -i - 1;
            if (testPage >= 1) {
                model.unshift({page:testPage});
            } else {
                break;
            }
        }
        return model;
    }
};