(function () {
  'use strict';

  angular
    .module('interviewDemo')
    .controller('TasksController', TasksController);

  /** @ngInject */
  function TasksController($mdDialog) {
    var vm = this;

    vm.tasksArr = [{
      "taskTitle": "Write a blog post",
      "recommendations": [
        {
          "recommendationTitle": "Edit & Proof",
          "launchItems": [
            {
              "description": "Edit Doc",
              "launchURL": "https://docs.google.com/",
              "imageURL": "https://www.sketchappsources.com/resources/source-image/google-docs-icons-dylonsmith.jpg"
            },
            {
              "description": "Proof Doc",
              "launchURL": "https://www.grammarly.com/",
              "imageURL": "https://whatswp.com/wp-content/uploads/2014/05/grammarly.jpg"
            }
          ]
        },
        {
          "recommendationTitle": "Edit, Proof, & Publish",
          "launchItems": [
            {
              "description": "Edit Doc",
              "launchURL": "https://docs.google.com/",
              "imageURL": "<imageURL>"
            },
            {
              "description": "Proof Doc",
              "launchURL": "https://www.grammarly.com/",
              "imageURL": "https://whatswp.com/wp-content/uploads/2014/05/grammarly.jpg"
            },
            {
              "description": "Mailing List",
              "launchURL": "https://mailchimp.com/",
              "imageURL": "http://icancloudapps.com/wp-content/uploads/2014/10/mailchimplogo.png"
            },
            {
              "description": "Social Post",
              "launchURL": "https://buffer.com/",
              "imageURL": "https://static.buffer.com/images/facebook/buffer-logo-facebookpreview.png"
            }
          ]
        }
      ]
    }];

    vm.fnOpenTask = function(taskObj){
      $mdDialog.show({
        templateUrl:'/app/task/task.html',
        controller:'TaskController',
        controllerAs:'task',
        locals:{taskObj:taskObj}
      })
    };
  }
})();
