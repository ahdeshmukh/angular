(function() {
	'use strict'
	
	angular
		.module('angularApp.directives')
		.directive('isolateScopeEqual', isolateScopeEqual);
	
	function isolateScopeEqual() {
		
		var directive = {
				restrict: 'AE',
				scope: {
					xyz:"=fruitName"
				},
				template: '<input type="text" ng-model="xyz" />',
		};
		
		return directive;
		
	}
	
})();