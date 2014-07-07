'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'cfp.hotkeys'
]).
config(function ($routeProvider, $locationProvider, hotkeysProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home',
      controller: 'homePage'
    }).
    when('/login', {
      templateUrl: 'partials/login',
      controller: 'loginPage'
    }).
    when('/u/:screen_name', {
      templateUrl: 'partials/user',
      controller: 'userPage'
    }).
    when('/live', {
      templateUrl: 'partials/live',
      controller: 'livePage'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);

  hotkeysProvider.includeCheatSheet = false;

});
