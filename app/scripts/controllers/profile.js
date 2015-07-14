'use strict';

angular.module('kissMarryDissApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var date = new Date();
    $scope.streams = [
      {name: 'ian', message: 'This is a sample statement',img: '', createdAt: date},
      {name: 'cherry', message: 'This is a sample statement',img: '', createdAt: date},
      {name: 'vj', message: 'This is a sample statement',img: '', createdAt: date},
      {name: 'Ging', message: 'This is a sample statement',img: '', createdAt: date},
      {name: 'Ric', message: 'This is a sample statement',img: '', createdAt: date}];

  });