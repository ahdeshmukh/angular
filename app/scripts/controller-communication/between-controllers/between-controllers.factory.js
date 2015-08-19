(function() {
	'use strict';
	
	angular
		.module('angularApp.controllerCommunication')
		.factory('communicationSharedFactory', communicationSharedFactory);
	
	communicationSharedFactory.$inject = ['$rootScope'];
	
	function communicationSharedFactory($rootScope) {
		var factory = {};
		
		factory.message = '';
		
		factory.prepForBroadcast = function(msg) {
      this.message = msg;
      this.broadcastItem();
		};

		factory.broadcastItem = function() {
      $rootScope.$broadcast('handleBroadcast');
		};

		return factory;
		
		
	}
	
})();