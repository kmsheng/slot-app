'use strict';

angular.module('slotApp')
.service('trickService', function() {

  var self = this;

  self.trickingStatus = false;

  self.setTrickingStatus = function(status) {
    self.trickingStatus = status;
    return self.trickingStatus;
  };

  self.isTricking = function() {
    return self.trickingStatus;
  };

});
