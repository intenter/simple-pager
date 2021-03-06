module.exports = {
    getPagesModel: function getPagesModel(currPage, totalPages, options) {
        options = options ? options : {surroundWith: 1, outputFirst: false, outputLast: false};
        var model = [{page:currPage, current:true}];
        var testPage;
        var i;
        var surroundWith = ('undefined' !== typeof (options.surroundWith)) ? options.surroundWith : 1;
        //to the right of the current
        for (i=0; i<surroundWith; i++) {
            testPage = currPage + i + 1;
            if (testPage <= totalPages && testPage > 0) {
                model.push({page:testPage});
            } else {
                break;
            }
        }
        if (options.outputLast && model[model.length-1].page !== totalPages) {
            model.push({page: totalPages});
        }
        if (model[model.length-1].page === totalPages){
            model[model.length-1].last = true;
        }
        
        //to the left of the current
        for (i=0; i<surroundWith; i++) {
            testPage = currPage - i - 1;
            if (testPage <= totalPages && testPage > 0) {
                model.unshift({page:testPage});
            } else {
                break;
            }
        }
        if (options.outputFirst && model[0].page !== 1) {
            model.unshift({page: 1});
        }
        if (model[0].page === 1) {
            model[0].first = true;
        }
        return model;
    }
};