App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {

});

App.IndexRoute = Ember.Route.extend({
  model: function() {
	  return this.store.find('events', 1);
  }
});

//App.EventsController = Ember.ObjectController.extend({
//  name: "Hello",
//
//  actions: {
//
//  }
//});

App.Events = DS.Model.extend({
	name: DS.attr("string"),
  organiser: DS.attr("string"),
  startdate: DS.attr("string")
});


App.Events.FIXTURES = [
  	{
      "id": 1,
		"name": "Socrates UK 2014",
		"organiser": "LSCC",
		"startdate": "2014-06-12"
	},
	{
    "id": 2,
		"name": "Socrates 2014",
		"organiser": "Nicole",
		"startdate": "2014-08-07"
	}
];
