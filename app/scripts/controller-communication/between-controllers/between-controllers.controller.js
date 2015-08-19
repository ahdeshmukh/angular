(function() {
	'use strict';
	
	angular
		.module('angularApp.controllerCommunication')
		.controller('CommunicationControllerSender', communicationControllerSender)
		.controller('CommunicationControllerReceiver1', communicationControllerReceiver1)
		.controller('CommunicationControllerReceiver2', communicationControllerReceiver2);
	
	communicationControllerSender.$inject = ['communicationSharedFactory', '$scope'];
	function communicationControllerSender(communicationSharedFactory, $scope) {
		var vm = this;
		
		vm.handleClick = function(msg) {
			communicationSharedFactory.prepForBroadcast(msg);
		};
      
		/*$scope.$on('handleBroadcast', function() {
      vm.message = communicationSharedFactory.message;
		});*/
		
	}
	
	communicationControllerReceiver1.$inject = ['communicationSharedFactory', '$scope'];
	function communicationControllerReceiver1(communicationSharedFactory, $scope) {
		var vm = this;
		
		$scope.$on('handleBroadcast', function() {
      vm.message = 'RECEIVER ONE: ' + communicationSharedFactory.message;
		});
	
	}
	
	communicationControllerReceiver2.$inject = ['communicationSharedFactory', '$scope'];
	function communicationControllerReceiver2(communicationSharedFactory, $scope) {
		var vm = this;
		
		$scope.$on('handleBroadcast', function() {
      vm.message = 'RECEIVER TWO: ' + communicationSharedFactory.message;
		});
	
	}
	
})();