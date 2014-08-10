/** @jsx React.DOM */
var React = require('react');
var moment = require('moment');
var EventBoxController = require('./EventBoxController');
var EventBox = require('./EventBox');

var view = React.renderComponent(
    EventBox({events: []}),
    document.getElementById('events')
);
var controller = new EventBoxController(view);
controller.render();
