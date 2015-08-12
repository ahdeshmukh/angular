(function(){
	'use strict';
	
	angular
		.module('angularApp.transitionAnimations')
		.controller('AngularAnimateNgIfToggle', angularAnimateNgIfToggle);
	
	function angularAnimateNgIfToggle() {
		
		var vm = this;
		this.toggle = true;
		
	}
	
	
})();