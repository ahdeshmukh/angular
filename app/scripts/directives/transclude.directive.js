(function() {
	'use strict';
	
	angular
		.module('angularApp.directives')
		.directive('amitTransclude', amitTransclude);
	
	function amitTransclude() {
		var directive = {
			restrict: "E",
		  scope: {},
		  transclude: true,
		  template: "<div><b>Prepending</b><ng-transclude></ng-transclude></div>" + 
		  					"<div>This is the tutorial to understand transclude</div>" +
		  					"<div><b>Appending</b><ng-transclude></ng-transclude></div>"
		}
		
		return directive;
	}
	
})();