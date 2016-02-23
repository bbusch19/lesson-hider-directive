angular.module('directivePractice').directive('lessonHider', function() {
  return {
    restrict: 'E',
    templateUrl: 'lessonHider.html',
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    scope: {
      lesson: '='
    },
    link: function(scope, element, attributes) {
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;
        for (var i = 0; i < scope.schedule.length; i++) {
          for (var prop in scope.schedule[i]) {
            if (scope.lesson === scope.schedule[i][prop]) {
              return element.css('text-decoration', 'line-through');
            }
          }
        }
      });
    }
  }


});
