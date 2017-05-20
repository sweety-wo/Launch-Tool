(function () {
  'use strict';

  angular
    .module('interviewDemo')
    .controller('TaskController', TaskController);

  /** @ngInject */
  function TaskController(taskObj,$mdDialog) {
    var vm = this;
    vm.taskObj = taskObj;

    vm.selectedRecommendation = vm.taskObj.recommendations[0];

    vm.fnCloseDialog = function(){
      $mdDialog.cancel();
    }

  }
})();
