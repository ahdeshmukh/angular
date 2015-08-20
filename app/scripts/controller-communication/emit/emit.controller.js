(function() {
	'use strict';
	
	angular
		.module('angularApp.controllerCommunication')
		.controller('EmitParentCtrl', emitParentCtrl)
		.controller('EmitChild1Ctrl', emitChild1Ctrl)
		.controller('EmitChild2Ctrl', emitChild1Ctrl);
	
	emitParentCtrl.$inject = ['$scope'];
	function emitParentCtrl($scope) {
		
		var vm = this;
		
		$scope.$on('emitTutorial', function(event, args) {
			vm.message = args.message;
		});
	
	}
	
	
	emitChild1Ctrl.$inject = ['$scope'];
	function emitChild1Ctrl($scope) {
		
		var vm = this;
		
		vm.handleClick = function(msg) {
			$scope.$emit('emitTutorial', { message: msg });
		};
	
	}
	
	emitChild2Ctrl.$inject = ['$scope'];
	function emitChild2Ctrl($scope) {
		
		var vm = this;
		
		vm.handleClick = function(msg) {
			$scope.$emit('emitTutorial', { message: msg });
		};
	
	}
	
	
})();