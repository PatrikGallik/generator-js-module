var expect = chai.expect;
 
describe("MyModule", function() {
  describe("test function", function() {

    it("should return that it is Batman", function() {
      expect(MyModule.testMe()).to.equal("I am batman!");
    });
    
  });
});