(function() {
	angular
	.module('angularApp.angularBootstrapUi')
	.controller('CollapseDemoCtrl', collapseDemo);

	function collapseDemo() {
	  var vm = this;
	  vm.isCollapsed = true;
	}

})();