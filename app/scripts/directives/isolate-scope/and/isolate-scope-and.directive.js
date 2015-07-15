(function() {
	'use strict';
	
	angular
	.module('angularApp.directives')
	.directive('isolateScopeAnd', isolateScopeAnd);

	function isolateScopeAnd() {
		
		var directive = {
				restrict: 'AE',
				scope: {
					xyz:"&done"
				},
				template: '<input type="text" ng-model="choreVal">' + 
									' {{choreVal}} ' +
									'<div class="btn btn-primary" ng-click="xyz({chore: choreVal})">Done</div>',
		};
		
		return directive;
		
	}
	
})();