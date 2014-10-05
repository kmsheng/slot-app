
angular.module('slotApp')
.directive('pumpkin', function($timeout, $document, trickService) {
  return {
    restrict: 'A',
    templateUrl: 'pumpkin.html',
    replace: true,
    scope: true,
    link: function(scope, element) {

      scope.isTricking = trickService.isTricking;

      $document.keydown(function(e) {
        // http://unixpapa.com/js/key.html
        // press 1 to start tricking
        if (49 === e.keyCode) {
          trickService.setTrickingStatus(true);
        }
        // press 2 to cancel
        if (50 === e.keyCode) {
          trickService.setTrickingStatus(false);
        }
        scope.$apply();
      });
    }
  };
});
