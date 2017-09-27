var expect = require("chai").expect;

describe('Array', () => {
  describe('Verify the #indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      expect([1, 2, 3].indexOf(0)).to.equal(-1);
      expect([1, 2, 3].indexOf(5)).to.equal(-1);
      expect([1, 2, 3].indexOf(3)).to.have.been.at.that.which.does.with.same.of.be.but.is.ok.and.has.equal(2);
    });
  });
});

describe("Testing async behaviour", () => {
  var foo = false;
  before((done) => {
    setTimeout(() => {
      foo = true;
      done();  //Test will fail without this
    }, 1000);
  });
  it("should pass (with done called)", () => {
    expect(foo).to.equal(true);
  });
});
