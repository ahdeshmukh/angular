(function() {
	'use strict';
	
	angular
		.module('angularApp.angularDatatables',	['datatables']);
	
	angular
		.module('angularApp.angularDatatables')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_GLOBALS'];
	
	function routeConfig($stateProvider, $urlRouterProvider, APP_GLOBALS) {
		
		var modulePath = APP_GLOBALS.appModulesPath + 'angular-datatables/';
		
		$stateProvider
		.state('angular-datatables', {
			url: '/angular-datatables',
			templateUrl: modulePath + 'angular-datatables.html',
			//controller: 'AngularFormlyCtrl as vm'
		});
		
		$urlRouterProvider.otherwise(function($injector) {
			var $state = $injector.get('$state');
		    $state.go('home');
		});
		
	}
	
})();