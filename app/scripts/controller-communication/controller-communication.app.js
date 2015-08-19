(function() {
	'use strict';
	
	angular
		.module('angularApp.controllerCommunication',	[]);
	
	angular
		.module('angularApp.controllerCommunication')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_GLOBALS'];
	
	function routeConfig($stateProvider, $urlRouterProvider, APP_GLOBALS) {
		
		var modulePath = APP_GLOBALS.appModulesPath + 'controller-communication/';
		
		$stateProvider
		.state('controller-communication', {
			url: '/controller-communication',
			templateUrl: modulePath + 'controller-communication.html'
		})
		.state('controller-communication.between-controllers', {
			url: '/controller-communication/between-controllers',
			templateUrl: modulePath + '/between-controllers/between-controllers.html'
		});
		
		$urlRouterProvider.otherwise(function($injector) {
			var $state = $injector.get('$state');
		    $state.go('home');
		});
		
	}
	
})();