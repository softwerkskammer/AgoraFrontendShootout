angular.module('myApp', ['ngRoute'])

.factory('groupService', ['$http', '$q',
  function ($http, $q) {

    var getGroupOverview = function () {
      var deferedValue = $q.defer();

      $http.get('groups.json').success(function (data, status) {
        deferedValue.resolve(data);
      });

      return deferedValue.promise;
    };

    var getGroupDetails = function (groupID) {
      var deferedValue = $q.defer();
      $http.get('group' + groupID + '.json').success(function (data, status) {
        deferedValue.resolve(data);
      });

      return deferedValue.promise;
    };

    return {
      getGroupOverview: getGroupOverview,
      getGroupDetails: getGroupDetails
    }

  }])
  .factory('eventsService', ['$http', '$q',
  function ($http, $q) {

      var getEvents = function () {
        var deferedValue = $q.defer();

        $http({
          method: 'GET',
          url: 'events.json'
        }).success(function (data, status) {
          deferedValue.resolve(data);
        });

        return deferedValue.promise;
      }

      return {
        getEvents: getEvents
      }

  }])

.controller('MainController', function ($scope, groupList, eventList) {

  $scope.groups = groupList;

  $scope.events = eventList;

})


.controller('GroupController', function ($scope, groupService) {

  groupService.getGroupDetails($scope.group.id).then(function (data) {
    $scope.groupdata = data;
  });
})

.directive('wikiItem', function () {
  return {
    restrict: 'E',
    templateUrl: 'wiki-item.html',
    scope: {
      item: '='
    }
  }
})

.directive('wikiPanel', function () {
  return {
    restrict: 'E',
    templateUrl: 'wiki-items-panel.html',
    scope: {
      wiki: '='
    }
  }
})

.directive('blogItem', function () {
  return {
    restrict: 'E',
    templateUrl: 'blog-item.html',
    scope: {
      blog: '='
    }
  }
})

.directive('blogPanel', function () {
  return {
    restrict: 'E',
    templateUrl: 'blog-items-panel.html',
    scope: {
      blog: '='
    }
  }
})

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: ' templates/home.html',
      resolve: {
        groupList: function (groupService) {
          return groupService.getGroupOverview()
        },
        eventList: function (eventsService) {
          return eventsService.getEvents()
        }

      }
    }).when('/home2', {
      templateUrl: "templates/home2.html",
      controller: "MainController"
    })
    .otherwise({
      redirectTo: '/'
    })
});