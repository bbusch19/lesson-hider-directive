angular.module('directivePractice').directive('lessonHider', function() {
  return {
    restrict: 'E',
    templateUrl: 'lessonHider.html',
    scope: {
      lesson: '='
    },
    link: function(scope, element, attributes) {

    }
  }


});
