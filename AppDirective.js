
//Define Custom App Directive  NOTE - Directive has been discabled int the index file (not being used).
    angular
    .module("emailApp")
    .directive('btndirective', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            text: '='
        },
        template: '<span></span>',
        controller: function ($scope, $element) {
          // var t=$scope.text
         
          $element.bind('click', function(e){ //when click is triggered from the controller, directive creates the button
            var el = $compile("<button>{{text}}</button>")($scope);
            $element.parent().append(el);
            });
        }
  } 
});
    