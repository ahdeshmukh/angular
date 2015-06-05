(function() {
	'use strict';
	
	angular
		.module('angularApp.shows')
		.controller('ShowDetailCtrl', showDetailCtrl);
	
	showDetailCtrl.$inject = ['showsFactory', '$stateParams'];
	
	function showDetailCtrl(showsFactory, $stateParams) {
		
		var vm = this;
		
		vm.selectedShow = showsFactory.find($stateParams.id);
		
	}
	
})();