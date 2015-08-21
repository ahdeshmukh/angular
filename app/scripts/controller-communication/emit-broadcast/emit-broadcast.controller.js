(function() {
	'use strict';
	
	angular
		.module('angularApp.controllerCommunication')
		.controller('EmitBroadcastParentCtrl', emitBroadcastParentCtrl)
		.controller('EmitBroadcastChild1Ctrl', emitBroadcastChild1Ctrl)
		.controller('EmitBroadcastChild2Ctrl', emitBroadcastChild2Ctrl);
	
	emitBroadcastParentCtrl.$inject = ['$scope'];
	function emitBroadcastParentCtrl($scope) {
		var vm = this;
		$scope.$on('emit-broadcast-tutorial-emitted', function(event, args) {
			vm.msg = args.message;
			$scope.$broadcast('emit-broadcast-tutorial-broadcasted', {message: args.message});
		});
	}
	
	emitBroadcastChild1Ctrl.$inject = ['$scope'];
	function emitBroadcastChild1Ctrl($scope) {
		var vm = this;
		vm.handleClick = function(msg) {
			$scope.$emit('emit-broadcast-tutorial-emitted', { message: msg });
		};
		$scope.$on('emit-broadcast-tutorial-broadcasted', function(event, args) {
			vm.msg = args.message;
		});
	}
	
	emitBroadcastChild2Ctrl.$inject = ['$scope'];
	function emitBroadcastChild2Ctrl($scope) {
		var vm = this;
		vm.handleClick = function(msg) {
			$scope.$emit('emit-broadcast-tutorial-emitted', { message: msg });
		};
		$scope.$on('emit-broadcast-tutorial-broadcasted', function(event, args) {
			vm.msg = args.message;
		});
	}
	
})();