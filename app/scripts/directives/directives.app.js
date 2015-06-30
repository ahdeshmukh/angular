(function() {
	'use strict';
	
	angular
		.module('angularApp.directives',	[]);
	
	angular
		.module('angularApp.directives')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_GLOBALS'];
	
	function routeConfig($stateProvider, $urlRouterProvider, APP_GLOBALS) {
		
		var modulePath = APP_GLOBALS.appModulesPath + 'directives/';
		
		$stateProvider
		.state('directives', {
			url: '/directives',
			templateUrl: modulePath + 'directives.html'
		})
		.state('directives.transclude', {
			url: '/directives/transclude',
			templateUrl: modulePath + 'directives.transclude.html'
		})
		.state('directives.dom', {
			url: '/directives/dom',
			template: '<div dom-directive>Click Me!</div>'
		})
		.state('directives.hyperlinks', {
			url: '/directives/hyperlinks',
			templateUrl: modulePath + 'hyperlinks/hyperlinks.view.html',
			controller: 'HyperlinksCtrl as vm'
		});
	}
	
})();