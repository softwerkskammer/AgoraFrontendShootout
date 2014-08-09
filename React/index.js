/** @jsx React.DOM */

var EventItem = React.createClass({
    render: function () {
        return (<li className="list-group-item">
        {this.props.event.date} - {this.props.event.eventName}
        </li>)
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
            <div className="panel panel-default">
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

var events = [
    {
        "eventName": "Event Name One",
        "date": "1984-06-03T20:25:23"
    },
    {
        "eventName": "Event Name Two",
        "date": "1996-12-23T02:40:47"
    },
    {
        "eventName": "Event Name Three",
        "date": "1995-07-25T21:33:16"
    }
];

eventsView.setProps({events: events});

