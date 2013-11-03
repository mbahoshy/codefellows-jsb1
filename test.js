







testMod = require('./app');


function ok(expr, msg) {
  if (!expr) throw new Error(msg);
}

describe("isPrime()", function() {
    it("should return false when i is null", function() {
        ok(testMod.isPrime(null) === false,
           "isPrime did not return a boolean false");
    });

    it("should return false when i is 14", function() {
        ok(testMod.isPrime(14) === false,
           "isPrime did not return a boolean false");
    });

    it("should return true when i is 23", function() {
        ok(testMod.isPrime(23) === true,
           "isPrime did not return a boolean true");
    });
});





/*
describe('testMod', function(){
	before(function() {
		exports.myApp.listen(3000);
	});
	
	it (function(done){
	  request.get('localhost:3000/contacts').end(function(res){
	  	expect(res).to.exist;
	    done();	  	
	    //TODO check that response is okay
	  });

	});

});
*/


/*


add mocha 
execute node unit tests via grunt
add phantom js
execute client unit tests via phantomjs


// This is our BDD test rule.

*/
