var app = angular.module("gip",[]);
app.controller('myCtrl',function($scope){
    $scope.versions=[2.1,2.2,2.3]
    
});
app.filter('range', function() {
    return function(input, total) {
      total = parseInt(total);
  
      for (var i=0; i<total; i++) {
        input.push(i);
      }
  
      return input;
    };
  });

  