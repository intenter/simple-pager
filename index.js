module.exports = {
    getPagerModel: function getPagerModel(currPage, totalPages, options) {
        options = options ? options : {surroundWith:1, outputLast:false};
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
        if (options.outputLast && model[model.length-1].page != totalPages) {
            model.push({page: totalPages});
        }
        for (i=0; i<options.surroundWith; i++) {
            testPage = currPage - i - 1;
            if (testPage >= 1) {
                model.unshift({page:testPage});
            } else {
                break;
            }
        }
        if (options.outputFirst && model[0].page != 1) {
            model.unshift({page: 1});
        }
        return model;
    }
};