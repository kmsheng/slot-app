
(function() {
  'use strict';

  angular.module('slotApp')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'main/main.html',
        controller: 'MainCtrl'
      });
  }
})();
