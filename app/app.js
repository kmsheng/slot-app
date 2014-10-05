(function() {
  'use strict';

  angular.module('slotApp', ['ui.router'])
    .config(config);

  function config($locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
})();
