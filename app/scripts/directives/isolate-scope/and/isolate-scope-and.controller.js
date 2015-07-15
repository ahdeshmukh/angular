(function() {
	'use strict';
	
	angular
		.module('angularApp.directives')
		.controller('IsolateScopeAndCtrl', isolateScopeAnd);
	
	function isolateScopeAnd() {
		
		var vm = this;
		vm.logChore = logChore;
		
		function logChore(chore) {
			alert(chore + ' is done');
		}
		
	}
	
})();