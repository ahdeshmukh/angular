(function() {
	'use strict';
	
	angular
		.module('angularApp.angularBootstrapUi',	['ui.bootstrap']);
	
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
		})
		.state('angular-bootstrap-ui.accordion', {
			url: '/angular-bootstrap-ui/accordion',
			templateUrl: modulePath + 'accordion/accordion.html',
		})
		.state('angular-bootstrap-ui.alert', {
			url: '/angular-bootstrap-ui/alert',
			templateUrl: modulePath + 'alert/alert.html',
		})
		.state('angular-bootstrap-ui.collapse', {
			url: '/angular-bootstrap-ui/collapse',
			templateUrl: modulePath + 'collapse/collapse.html',
		});
		
		$urlRouterProvider.otherwise(function($injector) {
			var $state = $injector.get('$state');
		    $state.go('home');
		});
		
	}
	
})();