(function() {
	'use strict';
	
	angular
		.module('angularApp.directives')
		.controller('IsolateScopeAttrCtrl', isolateScopeAttr);
	
	function isolateScopeAttr() {
		
		var vm = this;
		vm.fruitName = 'Mango';
		
	}
	
})();