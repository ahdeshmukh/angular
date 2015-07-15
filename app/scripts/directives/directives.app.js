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
			url: '/transclude',
			templateUrl: modulePath + 'directives.transclude.html'
		})
		.state('directives.dom', {
			url: '/dom',
			template: '<div dom-directive>Click Me!</div>'
		})
		.state('directives.hyperlinks', {
			url: '/hyperlinks',
			templateUrl: modulePath + 'hyperlinks/hyperlinks.view.html',
			controller: 'HyperlinksCtrl as vm'
		})
		.state('directives.isolate-scope', {
			url: '/isolate-scope',
			templateUrl: modulePath + 'isolate-scope/isolate-scope.view.html'
		})
		.state('directives.isolate-scope.attr', {
			url: '/attr',
			templateUrl: modulePath + 'isolate-scope/attr/isolate-scope-attr.view.html',
			controller: 'IsolateScopeAttrCtrl as vm'
		})
		.state('directives.isolate-scope.equal', {
			url: '/equal',
			templateUrl: modulePath + 'isolate-scope/equal/isolate-scope-equal.view.html',
			controller: 'IsolateScopeEqualCtrl as vm'
		})
		.state('directives.isolate-scope.and', {
			url: '/and',
			templateUrl: modulePath + 'isolate-scope/and/isolate-scope-and.view.html',
			controller: 'IsolateScopeAndCtrl as vm'
		});
	}
	
})();