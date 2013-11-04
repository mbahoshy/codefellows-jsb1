var app = require('./app');
var expect = require('expect.js'),
Browser = require('zombie'),
browser = new Browser();

describe('Loads pages', function(){

    it('Google.com', function(done){

        browser.visit("http://127.0.0.1:3000/contacts", function () {
            expect(browser.text("title")).to.equal('Code Fellows Contact Manager');
            done();
        });
    });

	it('addCustomer', function(){
		browser.visit("http://localhost:3000/contacts", function () {
		  assert.ok(browser.success);

			browser.clickLink("Add Customer", function(e, browser, status) {
			   expect(browser.text("title")).to.equal('Code Fellows Contact Add');
			});


		  if (browser.error )
		    console.dir("Errors reported:", browser.errors);

		});



		

	});    

});




/*


process.env.NODE_ENV = 'test';
var app = require('./app');
var assert = require('assert');
var Browser = require('zombie');
var http = require('http');

describe('contact page', function() {
 
	before(function() {
	this.server = http.createServer(app).listen(3000);
	this.browser = new Browser({ site: 'http://localhost:3000' });
	});
	 
	// load the contact page before each test
	beforeEach(function(done) {
	this.browser.visit('/contacts', done);
	});
	 
	it('should show contact a form', function() {
	assert.ok(this.browser.success);
	assert.equal(this.browser.text('button'), 'Submit');
	});

});

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

describe('testMod', function(){
	before(function() {
		testMod.app.listen(3000);
	});
	
	it (function(done){
	  request.get('localhost:3000/contacts').end(function(res){
	  	expect(res).to.exist;
	    done();	  	
	    //TODO check that response is okay
	  });

	});

});


testMod = require('./app');

function ok(expr, msg) {
  if (!expr) throw new Error(msg);
}

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
