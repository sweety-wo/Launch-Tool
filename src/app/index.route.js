(function() {
  'use strict';

  angular
    .module('interviewDemo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        abstract: true,
        controllerAs: 'main'
      })
      .state('main.tasks', {
        url: '/tasks',
        templateUrl: 'app/tasks/tasks.html',
        controller: 'TasksController',
        controllerAs: 'tasks'
      });

    $urlRouterProvider.otherwise('/tasks');
  }

})();
