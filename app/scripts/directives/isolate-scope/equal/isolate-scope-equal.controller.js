(function() {
	'use strict';
	
	angular
		.module('angularApp.directives')
		.controller('IsolateScopeEqualCtrl', isolateScopeEqual);
	
	function isolateScopeEqual() {
		
		var vm = this;
		vm.fruitName = 'Mango';
		
	}
	
})();