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

    }
  }


});
