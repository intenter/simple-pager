var pager = require('../index.js');
var expect = require('chai').expect;

describe ('pager should work with default options', function(){
    it('works with 3 pages and middle current', function(){
        expect(pager.getPagerModel(2, 3)).to.be.deep.equal([{page:1}, {page:2, current: true}, {page:3}]);
    });

    it('works with the first current', function(){
        expect(pager.getPagerModel(1, 10)).to.be.deep.equal([{page:1, current: true}, {page:2}]);
    });

    it('works with 3 pages and the last current', function(){
        expect(pager.getPagerModel(3, 3)).to.be.deep.equal([{page:2}, {page:3, current: true}]);
    });

    it('works with 10 pages and the fourth current', function(){
        expect(pager.getPagerModel(4, 10)).to.be.deep.equal([{page:3}, {page:4, current:true}, {page:5}]);
    });
});

describe ('pager can have different number of surrounding pages to display', function(){
    it('works with the explicit single surrounding page', function(){
        expect(pager.getPagerModel(4, 10, {surroundWith:1})).to.be.deep.equal([{page:3}, {page:4, current:true}, {page:5}]);
    });
    it('works with two surrounding pages', function(){
        expect(pager.getPagerModel(4, 10, {surroundWith:2})).to.be.deep.equal([
            {page:2}, {page:3},
            {page:4, current:true},
            {page:5}, {page:6}]);
    });
    it('works with more surrounding pages then available', function(){
        expect(pager.getPagerModel(3, 5, {surroundWith:30})).to.be.deep.equal([
            {page:1}, {page:2},
            {page:3, current:true},
            {page:4}, {page:5}]);
    });
    it('works with zero surrounding pages', function(){
        expect(pager.getPagerModel(3, 5, {surroundWith:0})).to.be.deep.equal([{page:3, current:true}]);
    });
});