/*
 * 
 * This directive is developed to keep the functionality of the 'a' directive defined in hyperlinks.directive.js
 * http://stackoverflow.com/questions/17417607/angular-ng-bind-html-unsafe-and-directive-within-it
 * http://jsfiddle.net/NWZZE/6/
 * http://forum.ionicframework.com/t/how-to-opening-links-in-content-in-system-browser-instead-of-cordova-browser-wrapper/2427
 * 
 */

(function() {
  
  'use strict';
  
  angular
    .module('angularApp.directives')
    .directive('compile', compileDir);
  
  compileDir.$inject = ['$compile'];
  
  function compileDir($compile) {
    var directive = {
      restrict: 'A',
      link: link
    };
    
    return directive;
    
    function link(scope, element, attrs) {
      scope.$watch(
          function(scope) {
          // watch the 'compile' expression for changes
            return scope.$eval(attrs.compile);
          },
          function(value) {
            // when the 'compile' expression changes
            // assign it into the current DOM
            element.html(value);

            // compile the new DOM and link it to the current
            // scope.
            // NOTE: we only compile .childNodes so that
            // we don't get into infinite loop compiling ourselves
            $compile(element.contents())(scope);
          }
        );
    }
    
    
  }
  
})()