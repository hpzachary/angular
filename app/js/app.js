'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'phonecatControllers'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'mainController'
      }).
      when('/home', {
        templateUrl: 'partials/view_home.html',
        controller: 'mainController'
      }).
      when('/info', {
        templateUrl: 'partials/view_info.html',
        controller: 'mainController'
      }).
      when('/goals', {
        templateUrl: 'partials/view_goals.html',
        controller: 'mainController'
      }).
      when('/professional', {
        templateUrl: 'partials/view_professional.html',
        controller: 'mainController'
      }).
      when('/personal', {
        templateUrl: 'partials/view_personal.html',
        controller: 'mainController'
      }).
      when('/high_school', {
        templateUrl: 'partials/view_high_school.html',
        controller: 'mainController'
      }).
      when('/college', {
        templateUrl: 'partials/view_college.html',
        controller: 'mainController'
      }).
      when('/projects', {
        templateUrl: 'partials/view_projects.html',
        controller: 'mainController'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]);
