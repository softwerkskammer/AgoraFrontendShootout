var expect = require('must');
var sinon = require('sinon').sandbox.create();


describe('EventBox', function() {

  afterEach(function() {
    sinon.restore(); // reset all mocks
  });

  it('should be so false', function() {
    expect(true).to.be.true();
  });

  describe('get data via ajax', function() {
    it('should pass the data to EventBox', function() {
      var ajaxData = {all: []};
      sinon.stub(Agora.util, 'ajax', function(callback) {
        callback(null, ajaxData);
      });

      var spy = sinon.spy(EventBoxController.prototype, 'renderNewData');

      expect(spy.calledWith(ajaxData)).to.be.true();
    });
  });

});
