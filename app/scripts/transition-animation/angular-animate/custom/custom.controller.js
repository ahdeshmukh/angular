(function(){
	'use strict';
	
	angular
		.module('angularApp.transitionAnimations')
		.controller('AngularAnimateCustom', angularAnimateCustom);
	
	function angularAnimateCustom() {
		
		var vm = this;
		vm.showFruit = showFruit;
		
		function showFruit(fruit) {
			console.log(fruit);
		}
		
	}
	
	
})();