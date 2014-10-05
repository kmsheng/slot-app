
angular.module('slotApp')
.directive('slot', function($document, trickService) {
  return {
    restrict: 'A',
    templateUrl: 'angular-slot.html',
    replace: true,
    scope: true,
    link: function(scope, element, attr) {

      var config = scope.$eval(attr.slot) || {};

      var rows = config.textList,
          arm = element.find('.arm'),
          paneList = element.find('.pane-list'),
          equation = element.find('.equation');

      var ROWS_COUNT = 2000;

      // fill to 2000 rows for spinning
      if (rows.length < ROWS_COUNT) {
        var newRows = [];
        for (var i = 0; i < ROWS_COUNT; i++) {
          newRows.push(rows[i % rows.length]);
        }
        rows = newRows;
      }

      scope.rows = rows;
      scope.paneSize = config.paneSize || 'md';

      arm.click(function(e) {
        arm.addClass('clicked');
        setTimeout(function() {
          arm.removeClass('clicked')
        }, 500);
        e.preventDefault();
        spin();
      });

      var DELTA = 3;    // modify this if want to spin longer

      function spin() {

        var index = 0;
        var random;

        random = Math.floor((Math.random() * (config.textList.length + DELTA)) + 1);

        (function doSpin() {
          setTimeout(function() {
            paneList.css('margin-top', -(++index * 10));
            if (parseInt(paneList.css('margin-top'), 10) <= -(140 * random)) {

              if (angular.isDefined(config.tricking) && trickService.isTricking()) {
                paneList.css('margin-top', -140 * 32);
              }
              return;
            }
            doSpin();
          }, 1);
        })();

      }
    }
  };
});
