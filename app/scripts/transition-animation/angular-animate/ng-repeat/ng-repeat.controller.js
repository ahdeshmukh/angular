(function(){
	'use strict';
	
	angular
		.module('angularApp.transitionAnimations')
		.controller('AngularAnimateNgRepeat', angularAnimateNgRepeat);
	
	function angularAnimateNgRepeat() {
		
		var vm = this;
		vm.items = [];
		
		vm.addItems = addItems;
		vm.clearItems = clearItems;
		vm.removeItem = removeItem;
		
		function addItems() {
			for(var i = 1; i < 11; i++) {
				vm.items.push({'title': 'item' + i});
			}
		}
		
		function clearItems() {
			vm.items = [];
		}
		
		function removeItem(index) {
			vm.items.splice(index, 1);
		}
		
	}
	
	
})();