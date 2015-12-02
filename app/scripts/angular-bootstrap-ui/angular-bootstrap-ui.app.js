(function() {
	'use strict';
	
	angular
		.module('angularApp.angularBootstrapUi',	[]);
	
	angular
		.module('angularApp.angularBootstrapUi')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_GLOBALS'];
	
	function routeConfig($stateProvider, $urlRouterProvider, APP_GLOBALS) {
		
		var modulePath = APP_GLOBALS.appModulesPath + 'angular-bootstrap-ui/';
		
		$stateProvider
		.state('angular-bootstrap-ui', {
			url: '/angular-bootstrap-ui',
			templateUrl: modulePath + 'angular-bootstrap-ui.html',
		});
		
		$urlRouterProvider.otherwise(function($injector) {
			var $state = $injector.get('$state');
		    $state.go('home');
		});
		
	}
	
})();