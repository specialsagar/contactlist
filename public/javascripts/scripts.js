
// Declare app level module which depends on views, and components
var app = angular.module('contactlistApp', [ 'ngRoute']);

//define routes
app.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'templates/contactlist.html',
      controller: 'contactlistCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});


app.controller('contactlistCtrl', function ($scope){

});
