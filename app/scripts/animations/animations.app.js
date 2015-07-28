(function() {
	'use strict';
	
	angular
		.module('angularApp.animations', []);
	
	angular
		.module('angularApp.animations')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider'];
	
	function routeConfig($stateProvider) {
		
		$stateProvider
		.state('animations', {
			url: '/animations',
			template: '<h1>Animations</h1>'
		});
	}
	
})();