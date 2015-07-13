(function() {
	'use strict'
	
	angular
		.module('angularApp.directives')
		.directive('isolateScopeAttr', isolateScopeAttr);
	
	function isolateScopeAttr() {
		
		var directive = {
				restrict: 'AE',
				scope: {
					xyz:"@fruitName"
				},
				template: '<div><b>{{xyz}}</b></div>',
				//link: link
		};
		
		return directive;
		
		/*function link(scope, elem, attrs) {
			scope.fruitName = attrs.fruitName;
		}*/
		
		
	}
	
})();