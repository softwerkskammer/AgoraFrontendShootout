var React = require('react');

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

module.exports = EventBox;
