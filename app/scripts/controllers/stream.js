'use strict';

angular.module('kissMarryDissApp')
  .controller('StreamCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.stream = [{
      from: 'user1',
      to: 'user2',
      action: 'kiss'
    },
    {
      from: 'user1',
      to: 'user2',
      action: 'kiss'
    },
    {
      from: 'user1',
      to: 'user2',
      action: 'kiss'
    },
    {
      from: 'user1',
      to: 'user2',
      action: 'kiss'
    },
    {
      from: 'user1',
      to: 'user2',
      action: 'kiss'
    }];

  });