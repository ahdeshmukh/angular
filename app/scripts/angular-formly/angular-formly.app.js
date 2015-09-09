(function() {
	'use strict';
	
	angular
		.module('angularApp.angularFormly',	['formly', 'formlyBootstrap']);
	
	angular
		.module('angularApp.angularFormly')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_GLOBALS'];
	
	function routeConfig($stateProvider, $urlRouterProvider, APP_GLOBALS) {
		
		var modulePath = APP_GLOBALS.appModulesPath + 'angular-formly/';
		
		$stateProvider
		.state('angular-formly', {
			url: '/angular-formly',
			templateUrl: modulePath + 'angular-formly.html',
			controller: 'AngularFormlyCtrl as vm'
		});
		
		$urlRouterProvider.otherwise(function($injector) {
			var $state = $injector.get('$state');
		    $state.go('home');
		});
		
	}
	
})();