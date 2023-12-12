(function () {
  'use strict';
  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope', '$filter'];
  function MsgController($scope,$filter){
    $scope.name = "Hiren";
    $scope.stateOfBeing = "01";
    $scope.cookieCost = .45;
    $scope.sayMessage = function (){
      var msg = "Hiren likes to eat healthy food!";
      var output = $filter('uppercase')(msg);
      return output;
    };

    $scope.feedHiren = function (){
      $scope.stateOfBeing = "02";
    };
  }
})(); 
