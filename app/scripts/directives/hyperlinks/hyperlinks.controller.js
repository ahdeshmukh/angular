(function() {
	'use strict';
	
	angular
		.module('angularApp.directives')
		.controller('HyperlinksCtrl', HyperlinksCtrl);
	
	function HyperlinksCtrl() {
		
		var vm = this;
		
		vm.data = 'Dummy data. Assume this data is coming from a server which has html embedded in it' + 
							'<div style="color:red">Hello Dummy Data</div>' + 
							'<a href="http://www.google.com">Google</a>';
		
	}
	
})();