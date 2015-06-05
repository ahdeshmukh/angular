(function() {
	'use strict';
	
	angular
		.module('angularApp.home',	[]);
	
	angular
		.module('angularApp.home')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_GLOBALS'];
	
	function routeConfig($stateProvider, $urlRouterProvider, APP_GLOBALS) {
		
		var modulePath = APP_GLOBALS.appModulesPath + 'home/';
		
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: modulePath + 'home.html'
		});
	
		$urlRouterProvider.otherwise(function($injector) {
			var $state = $injector.get('$state');
		    $state.go('home');
		});
	}
	
})();