var expect = chai.expect;
 
describe("MyModule", function() {

  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    sandbox.stub(window.console, "log");
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe("test function", function() {

    it("should return that it is Batman", function() {
      expect(MyModule.testMe()).to.equal("I am batman!");
    });

    it("should log something to a console", function() {
      MyModule.testMe();
      
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "test log");
    })
    	
  });
  
});