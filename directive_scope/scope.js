angular.module('dirScope', [])
  .controller('scopeController', ['$scope', function($scope) {
    $scope.title = 'From parent';

    $scope.alertTitle = function() {
      alert($scope.title);
    }
  }])
  .directive('scopeIsFalse', function() {
    var section = {
      template: '<p>scope: false</p><p ng-bind="title"></p><input type="text" ng-model="title" />',
      // transclude: true,
      scope: false
    };

    return section;
  })
  .directive('isolatedScopeNone', function() {
    var section = {
      template: '<p>scope: {}</p><p ng-bind="sth"></p><input type="text" ng-model="sth" />',
      // transclude: true,
      scope: {}
    };

    return section;
  })
  .directive('isolatedScopeAt', function() {
    var section = {
      template: '<p>scope: {"@"}</p><p ng-bind="t1"></p><input type="text" ng-model="t1" />',
      // transclude: true,
      scope: {
        t1: '@atTitle'
      }
    };

    return section;
  })
  .directive('isolatedScopeEqual', function() {
    var section = {
      template: '<p>scope: {"="}</p><p ng-bind="t2"></p><input type="text" ng-model="t2" />',
      // transclude: true,
      scope: {
        t2: '=equalTitle'
      }
    };

    return section;
  })
  .directive('isolatedScopeAnd', function() {
    var section = {
      template: '<p>scope: {"&"}</p><p ng-bind="instruction"></p><button type="button" ng-click="t3()">click!</button>',
      // transclude: true,
      scope: {
        t3: '&andTitle'
      }
    };

    return section;
  })
