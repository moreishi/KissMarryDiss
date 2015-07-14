'use strict';

/*
    This is for main streem
*/

angular.module('kissMarryDissApp')
  .controller('MemberCtrl', ['$scope',function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
      
      $scope.isActive = function(path) { console.log(path); };

      $scope.members = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
  
    }]);