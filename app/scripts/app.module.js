(function() {
	'use strict';
	
	angular
		.module('angularApp.core', [
			'ngAnimate',
			'ngCookies',
		    'ngResource',
		    'ngSanitize',
		    'ngTouch',
		    'ui.router',
		    'ngLodash'
		]);
	
	angular
		.module('angularApp', [
			'angularApp.core',
			'angularApp.home',
			'angularApp.directives',
			'angularApp.routeviews'
		]);
})();