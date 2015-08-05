(function() {
	'use strict';
	
	angular
		.module('angularApp.transitionAnimations', []);
	
	angular
		.module('angularApp.transitionAnimations')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_GLOBALS'];
	
	function routeConfig($stateProvider, $urlRouterProvider, APP_GLOBALS) {
		
		var modulePath = APP_GLOBALS.appModulesPath + 'transition-animation/';
		
		$stateProvider
		.state('css3-transition-animation', {
			url: '/css3-transition-animation',
			templateUrl: modulePath + 'transition-animation.html'
		})
		.state('css3-transition-animation.transition', {
			url: '/transition',
			templateUrl: modulePath + '/css3/transition.html'
		})
		.state('css3-transition-animation.animation', {
			url: '/animation',
			templateUrl: modulePath + '/css3/animation.html'
		})
		.state('angular-animate', {
			url: '/angular-animate',
			templateUrl: modulePath + '/angular-animate/angular-animate.html'
		})
		.state('angular-animate.ngif-toggle', {
			url: '/ngif-toggle',
			templateUrl: modulePath + '/angular-animate/ng-if/ngif.html',
			controller: 'AngularAnimateNgIfToggle as vm'
		});
		
		$urlRouterProvider.otherwise(function($injector) {
			var $state = $injector.get('$state');
		    $state.go('home');
		});
		
	}
	
})();