module.exports = {
    getPagerModel: function getPagerModel(currPage, totalPages) {
        var model = [{page:currPage, current:true}];
        var testPage;
        for (var i=0; i<1; i++) {
            testPage = currPage + i + 1;
            if (testPage <= totalPages) {
                model.push({page:testPage});
            }

            testPage = currPage -i - 1;
            if (testPage >= 1) {
                model.unshift({page:testPage});
            }
        }
        return model;
    }
};