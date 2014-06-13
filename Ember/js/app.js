App = Ember.Application.create();

App.Router.map(function() {
  
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
	  return [	
	      	{
	    		"name": "Socrates UK 2014 bis",
	    		"organiser": "LSCC",
	    		"start-date": "2014-06-12"
	    	},
	    	{
	    		"name": "Socrates 2014 bis",
	    		"organiser": "Nicole",
	    		"start-date": "2014-08-07"
	    	}
	    ];
  }
});

App.Event = DS.Model.extend({
	name: DS.attr("string")
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Event.FIXTURES = [	
  	{
		"name": "Socrates UK 2014",
		"organiser": "LSCC",
		"start-date": "2014-06-12"
	},
	{
		"name": "Socrates 2014",
		"organiser": "Nicole",
		"start-date": "2014-08-07"
	}
];
