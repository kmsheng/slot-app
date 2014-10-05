(function() {
  'use strict';

  angular.module('slotApp')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl($scope, SLOT_CONFIG_FIRST, SLOT_CONFIG_SECOND) {

    $scope.slotConfigFirst = SLOT_CONFIG_FIRST;
    $scope.slotConfigSecond = SLOT_CONFIG_SECOND;
  }
})();
