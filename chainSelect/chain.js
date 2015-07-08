(function() {
  angular.module('chain', [])
    .controller('chainSelect', function($scope) {
       var a = {
          "family": "Lannister",
          "member": [
            {"name": "Tyrion Lannister"},
            {"name": "Tywin Lannister"},
            {"name": "Jaime Lannister"},
            {"name": "Cersei Lannister"}
            ]
          };

       var b = {
          "family": "Stark",
          "member": [
            {"name": "Jon Snow"},
            {"name": "Arya Stark"},
            {"name": "Bran Stark"},
            {"name": "Sansa Stark"}
            ]
          };

        $scope.thrones = [a, b];
  });
})(window.angular)
