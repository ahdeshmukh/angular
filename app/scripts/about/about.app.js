(function() {
	'use strict';
	
	angular
		.module('angularApp')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_GLOBALS'];
	
	function routeConfig($stateProvider, $urlRouterProvider, APP_GLOBALS) {
		
		var modulePath = APP_GLOBALS.appModulesPath + 'about/';
		
		$stateProvider
		.state('about', {
			url: '/about',
			templateUrl: modulePath + 'about.html'
		});
	}
	
})();