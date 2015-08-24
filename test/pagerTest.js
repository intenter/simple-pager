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
