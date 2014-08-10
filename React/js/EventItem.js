/** @jsx React.DOM */
var React = require('react');
var moment = require('moment');

var EventItem = React.createClass({
    render: function () {
        var event = this.props.event;
        return (<li className="list-group-item">
            {this._renderDate(event.date)}
            {this._renderEventName(event.eventName)}
        </li>)
    },
    _renderDate: function (eventDate) {
        var date = moment.unix(eventDate);
        return (<span>{date.format("LL")}</span>);
    },

    _renderEventName: function (eventName) {
        return (<a className="eventName">{eventName}</a>)
    }
});

module.exports = EventItem;
