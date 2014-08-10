var jQuery = require('jQuery');
function getAllDashboardEvents(callback) {
    jQuery.ajax({url: 'resources/JSON/events.json'})
        .fail(function (jqXHR, error) {
            callback(error)
        })
        .done(function (data) {
            callback(null, data.all)
        });
};

module.exports = {getAllDashboardEvents: getAllDashboardEvents};
