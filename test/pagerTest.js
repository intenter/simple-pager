var pager = require('../index.js');
var expect = require('chai').expect;

describe ('pager should work with default options', function(){
    it('works with 3 pages and middle current', function(){
        expect(pager.getPagesModel(2, 3)).to.be.deep.equal([{page:1}, {page:2, current: true}, {page:3}]);
    });

    it('works with the first current', function(){
        expect(pager.getPagesModel(1, 10)).to.be.deep.equal([{page:1, current: true}, {page:2}]);
    });

    it('works with 3 pages and the last current', function(){
        expect(pager.getPagesModel(3, 3)).to.be.deep.equal([{page:2}, {page:3, current: true}]);
    });

    it('works with 10 pages and the fourth current', function(){
        expect(pager.getPagesModel(4, 10)).to.be.deep.equal([{page:3}, {page:4, current:true}, {page:5}]);
    });
    it('works with current bigger then total', function(){
        expect(pager.getPagesModel(20, 10)).to.be.deep.equal([{page:20, current:true}]);
    });
    it('works with negative current', function(){
        expect(pager.getPagesModel(-5, 10)).to.be.deep.equal([{page:-5, current:true}]);
    });
});

describe ('pager can have different number of surrounding pages to display', function(){
    it('works with the explicit single surrounding page', function(){
        expect(pager.getPagesModel(4, 10, {surroundWith:1})).to.be.deep.equal([{page:3}, {page:4, current:true}, {page:5}]);
    });
    it('works with the empty options passed', function(){
        expect(pager.getPagesModel(4, 10, {})).to.be.deep.equal([{page:3}, {page:4, current:true}, {page:5}]);
    });
    it('works with two surrounding pages', function(){
        expect(pager.getPagesModel(4, 10, {surroundWith:2})).to.be.deep.equal([
            {page:2}, {page:3},
            {page:4, current:true},
            {page:5}, {page:6}]);
    });
    it('works with more surrounding pages then available', function(){
        expect(pager.getPagesModel(3, 5, {surroundWith:30})).to.be.deep.equal([
            {page:1}, {page:2},
            {page:3, current:true},
            {page:4}, {page:5}]);
    });
    it('works with zero surrounding pages', function(){
        expect(pager.getPagesModel(3, 5, {surroundWith:0})).to.be.deep.equal([{page:3, current:true}]);
    });
});

describe ('pager display the first and the last pages', function(){
    it('works with the single page', function(){
        expect(pager.getPagesModel(1, 1, {surroundWith:1, outputFirst:true, outputLast:true}))
            .to.be.deep.equal([{page:1, current:true}]);
    });

    it('works with the middle is current', function(){
        expect(pager.getPagesModel(5, 10, {surroundWith:0, outputFirst:true, outputLast:true}))
            .to.be.deep.equal([{page:1}, {page:5, current:true}, {page:10}]);
    });

    it('works with the current bigger then total', function(){
        expect(pager.getPagesModel(20, 10, {surroundWith:0, outputFirst:true, outputLast:true}))
            .to.be.deep.equal([{page:1}, {page:20, current:true}, {page:10}]);
    });

    it('works with the current beinge negative', function(){
        expect(pager.getPagesModel(-5, 10, {surroundWith:0, outputFirst:true, outputLast:true}))
            .to.be.deep.equal([{page:1}, {page:-5, current:true}, {page:10}]);
    });
});

