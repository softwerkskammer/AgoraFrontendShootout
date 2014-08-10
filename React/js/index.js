/** @jsx React.DOM */

var EventItem = React.createClass({
    render: function () {
        var event = this.props.event;
        return (<li className="list-group-item">
            {this._renderDate(event.date)}
            {this._renderEventName(event.eventName)}
        </li>)
    },
    _renderDate: function (eventDate) {
        date = moment.unix(eventDate);
        return (<span>{date.format("LL")}</span>);
    },

    _renderEventName: function (eventName) {
        return (<a className="eventName">{eventName}</a>)
    }
});

var EventBox = React.createClass({

    _renderItems: function (items) {
        return items.map(function (item) {
            return (<EventItem event={item} />)
        });
    },

    render: function () {
        return (
            <div className="eventBox panel panel-default">
                <div className="panel-heading">My Activities</div>
                <ul className="list-group">
                    {this._renderItems(this.props.events)}
                </ul>
            </div>
            );
    }
});

var eventsView = React.renderComponent(
    EventBox({events: []}),
    document.getElementById('events')
);
$.ajax({url:'../JSON/events.json'}).done(function(data) {
  eventsView.setProps({events: data.all});
});

function EventBoxController() {}
EventBoxController.prototype = {
  render: function() {
    this._view = React.renderComponent(
      EventBox({events: []}),
      document.getElementById('events')
    );
  },
  renderNewData: function() {
    this._view.setProps();
  }
};

module.exports = EventBoxController;
