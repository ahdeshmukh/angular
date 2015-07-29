(function() {
	'use strict';
	
	angular
		.module('angularApp.animations', []);
	
	angular
		.module('angularApp.animations')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_GLOBALS'];
	
	function routeConfig($stateProvider, $urlRouterProvider, APP_GLOBALS) {
		
		var modulePath = APP_GLOBALS.appModulesPath + 'animations/';
		
		$stateProvider
		.state('animations', {
			url: '/animations',
			templateUrl: modulePath + 'animations.html'
		});
		
		$urlRouterProvider.otherwise(function($injector) {
			var $state = $injector.get('$state');
		    $state.go('home');
		});
		
	}
	
})();