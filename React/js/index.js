var React = require('react');
var EventBoxController = require('./EventBoxController');
var EventBox = require('jsx!./EventBox');

var view = React.renderComponent(
    EventBox({events: []}),
    document.getElementById('events')
);
var controller = new EventBoxController(view);
controller.render();
