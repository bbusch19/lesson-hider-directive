angular.module('directivePractice').directive('lessonHider', function() {
  return {
    restrict: 'E',
    templateUrl: 'lessonHider.html',
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
      $scope.strikethrough = false;

    },
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    link: function(scope, element, attributes) {
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;

        scope.schedule.forEach(function(scheduleDay) {
          if (scheduleDay.lesson === scope.lesson) {
            scope.strikethrough = true;
            scope.lessonDay = scheduleDay.weekday;
            return;
          }
        });

        scope.toggle = function() {
          if (scope.strikethrough) {
          element.css('text-decoration', 'line-through');
        } else {
          element.css('text-decoration', 'none');
        }
      }
      scope.toggle();
      scope.remove = function() {
        element.html('');
      }

      });
    }
  }


});
