'use strict';

/**
 * @ngdoc overview
 * @name kissMarryDissApp
 * @description
 * # kissMarryDissApp
 *
 * Main module of the application.
 */
angular
  .module('kissMarryDissApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'angularMoment',
    'ngTouch'
  ])
  .controller('HeadCtlr',['$scope','$location',function($scope,$location) {
    $scope.isActive = function(a) { 
      if(a === $location.path()) {
        return true;
      }
      return false;
    };
  }])
  .config(['$routeProvider',function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .when('/members', {
          templateUrl: 'views/member.html',
          controller: 'MemberCtrl'
        })
        .when('/stream', {
          templateUrl: 'views/stream.html',
          controller: 'StreamCtrl'
        })
        .when('/profile', {
          templateUrl: 'views/profile.html',
          controller: 'ProfileCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);