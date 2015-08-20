(function() {
	'use strict';
	
	angular
		.module('angularApp.controllerCommunication')
		.factory('broadcastFactory', broadcastFactory);
	
	broadcastFactory.$inject = ['$rootScope'];
	
	function broadcastFactory($rootScope) {
		var factory = {};
		
		factory.message = '';
		
		factory.prepForBroadcast = function(msg) {
      this.message = msg;
      this.broadcastItem();
		};

		factory.broadcastItem = function() {
      $rootScope.$broadcast('broadcast-no-parent-child-tutorial', {message: this.message});
		};

		return factory;
		
		
	}
	
})();