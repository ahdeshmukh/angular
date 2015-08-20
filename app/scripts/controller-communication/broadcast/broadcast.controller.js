(function() {
	'use strict';
	
	angular
		.module('angularApp.controllerCommunication')
		.controller('BroadcastParentCtrl', broadcastParentCtrl)
		.controller('BroadcastChild1Ctrl', broadcastChild1Ctrl)
		.controller('BroadcastChild2Ctrl', broadcastChild2Ctrl)
		.controller('BroadcastSenderCtrl', broadcastSenderCtrl)
		.controller('BroadcastReceiver1Ctrl', broadcastReceiver1Ctrl)
		.controller('BroadcastReceiver2Ctrl', broadcastReceiver2Ctrl)
		.controller('BroadcastReceiver1Child1Ctrl', broadcastReceiver1Child1Ctrl);
	
	broadcastParentCtrl.$inject = ['$scope'];
	function broadcastParentCtrl($scope) {
		var vm = this;
		vm.handleClick = function(msg) {
			$scope.$broadcast('broadcast-parent-child-tutorial', { message: msg });
		};
	}
	
	broadcastChild1Ctrl.$inject = ['$scope'];
	function broadcastChild1Ctrl($scope) {
		var vm = this;
		$scope.$on('broadcast-parent-child-tutorial', function(event, args) {
			vm.message = args.message;
		});
	}
	
	broadcastChild2Ctrl.$inject = ['$scope'];
	function broadcastChild2Ctrl($scope) {
		var vm = this;
		$scope.$on('broadcast-parent-child-tutorial', function(event, args) {
			vm.message = args.message;
		});
	}
	
	broadcastSenderCtrl.$inject = ['broadcastFactory'];
	function broadcastSenderCtrl(broadcastFactory) {
		var vm = this;
		vm.handleClick = function(msg) {
			broadcastFactory.prepForBroadcast(msg);
		}
	}
	
	broadcastReceiver1Ctrl.$inject = ['$scope'];
	function broadcastReceiver1Ctrl($scope) {
		var vm = this;
		$scope.$on('broadcast-no-parent-child-tutorial', function(event, args) {
			vm.message = args.message;
		});
	}
	
	broadcastReceiver1Child1Ctrl.$inject = ['$scope'];
	function broadcastReceiver1Child1Ctrl($scope) {
		var vm = this;
		$scope.$on('broadcast-no-parent-child-tutorial', function(event, args) {
			vm.message = args.message;
		});
	}
	
	broadcastReceiver2Ctrl.$inject = ['$scope'];
	function broadcastReceiver2Ctrl($scope) {
		var vm = this;
		$scope.$on('broadcast-no-parent-child-tutorial', function(event, args) {
			vm.message = args.message;
		});
	}
	
})();