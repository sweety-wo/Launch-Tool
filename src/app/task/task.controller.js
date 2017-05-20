(function () {
  'use strict';

  angular
    .module('interviewDemo')
    .controller('TaskController', TaskController);

  /** @ngInject */
  function TaskController(taskObj, $mdDialog, $mdSidenav) {
    var vm = this;
    vm.taskObj = taskObj;

    vm.selectedRecommendation = vm.taskObj.recommendations[0];

    vm.fnCloseDialog = function () {
      $mdDialog.cancel();
    };

    vm.fnOpenSideNav = function (launchItem) {
      $mdSidenav('rightView').toggle();
      vm.selectedItem = launchItem;
    }

  }
})();
