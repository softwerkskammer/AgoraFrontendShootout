var expect = require('must');
var chai = require('chai');
var sinon = require('sinon').sandbox.create();
var sinonChai = require("sinon-chai");
var chai_expect = chai.expect;
chai.use(sinonChai);


var EventBoxController = require('../js/EventBoxController');
var util = require('../js/util');


describe('EventBox', function() {

  afterEach(function() {
    sinon.restore(); // reset all mocks
  });

  describe('get data via ajax', function() {
    it('should pass the data to EventBox', function() {
      var events = [];
      sinon.stub(util, 'getAllDashboardEvents', function(callback) {
        callback(null, events);
      });

      var controller = new EventBoxController('dummyView');
      var spy = sinon.stub(controller, 'renderNewData');
      controller.render();

      chai_expect(spy).to.have.been.calledWith(null, events);
    });
  });

});
