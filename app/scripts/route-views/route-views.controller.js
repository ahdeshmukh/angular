(function() {
	'use strict';
	
	angular
		.module('angularApp.routeviews')
		.controller('RouteViews', routeViews);
	
	routeViews.$inject = ['lodash'];
	
	function routeViews(lodash) {
		
		var vm = this;
		
		lodash.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
		
	}
	
})();