(function() {
	'use strict';
	
	angular
		.module('angularApp.directives')
		.controller('IsolateScopeAttrCtrl', IsolateScopeAttr);
	
	function IsolateScopeAttr() {
		
		var vm = this;
		vm.fruitName = 'Mango';
		
	}
	
})();