(function() {
	'use strict';
	
	angular
		.module('angularApp.shows')
		.controller('ShowsCtrl', showsCtrl);
	
	showsCtrl.$inject = ['showsFactory'];
	
	function showsCtrl(showsFactory) {
		var vm = this;
		vm.shows = showsFactory.list();
	}
	
})();