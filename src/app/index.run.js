(function() {
  'use strict';

  angular
    .module('interviewDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
