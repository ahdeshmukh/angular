(function() {
	'use strict';
	
	angular
		.module('angularApp.directives',	[]);
	
	angular
		.module('angularApp.directives')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_GLOBALS'];
	
	function routeConfig($stateProvider, $urlRouterProvider, APP_GLOBALS) {
		
		var modulePath = APP_GLOBALS.appModulesPath + 'directives/';
		
		$stateProvider
		.state('directives', {
			url: '/directives',
			templateUrl: modulePath + 'directives.html'
		})
		
		$stateProvider
		.state('directives.transclude', {
			url: '/directives/transculde',
			templateUrl: modulePath + 'directives.transclude.html'
		});
	}
	
})();