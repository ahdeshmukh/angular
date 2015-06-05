(function() {
	'use strict';
	
	angular
		.module('angularApp.shows', []);
	
	angular
		.module('angularApp.shows')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider', 'APP_GLOBALS'];
	
	function routeConfig($stateProvider, APP_GLOBALS) {
		
		var modulePath = APP_GLOBALS.appModulesPath + 'route-views/shows/';
		
		$stateProvider
		.state('routeviews.shows', {
			url: '/shows',
			templateUrl: modulePath + 'shows.html',
			controller: 'ShowsCtrl as vm'
		})
		.state('routeviews.shows.detail', {
			url: '/:id',
			templateUrl: modulePath + 'show.detail.html',
			controller: 'ShowDetailCtrl as vm'
		});
	}
	
})();