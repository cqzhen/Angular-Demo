angular.module('sticky', [])
  .controller('navSticky', ['$scope', function($scope) {
    $scope.navList = [
      {
        id: 0,
        title: 'ele'
      },
      {
        id: 1,
        title: "meituan"
      },
      {
        id: 2,
        title: "baidu"
      }
    ];

    $scope.navOffsetY = [];

    // fixed height
    $scope.cardHeight = 500;

  }])
  .directive('eleNav', function($window) {
      var nav = {
        template: '<nav ng-model="nav.id" ng-class="{sticky:isSticky}"><h1 ng-bind="nav.title"></h1><nav>',
        replace: true,
        scope: false,
        controller: function($scope, $element) {
          $scope.isSticky = false;
          $scope.navOffsetY.push($element.prop('offsetTop'));
        },
        link: function (scope) {
          angular.element($window).bind('scroll', function() {
            if (this.pageYOffset >= scope.navOffsetY[scope.nav.id] && this.pageYOffset < (scope.navOffsetY[scope.nav.id] + scope.cardHeight)) {
              scope.isSticky = true;
            } else scope.isSticky = false;

            scope.$apply();
          });

        }
      };

      return nav;
    })
