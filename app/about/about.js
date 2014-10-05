
(function() {
  'use strict';

  angular.module('slotApp')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'about/about.html',
        controller: 'AboutCtrl'
      });
  }
})();
