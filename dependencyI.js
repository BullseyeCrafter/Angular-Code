(function () {
  'use strict';
  angular.module('DIApp', [])
  .controller('DIController', DIController);

  function DIController($scope, $filter){
    $scope.name = "Hiren";

    $scope.upper = function (){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  }

  function AnotateMe(name, job, blah){
    return "Blah!";
  }
  console.log(AnotateMe.toString());
})
();
