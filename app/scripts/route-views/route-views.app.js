(function() {
	'use strict';
	
	angular
		.module('angularApp.routeviews', ['angularApp.shows']);
	
	angular
		.module('angularApp.routeviews')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider'];
	
	function routeConfig($stateProvider) {
		
		$stateProvider
		.state('routeviews', {
			abstract: true,
			template: '<div ui-view></div>'
		});
	}
	
})();