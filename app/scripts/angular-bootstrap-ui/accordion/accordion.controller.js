(function() {
	angular
	.module('angularApp.angularBootstrapUi')
	.controller('AccordionDemo', accordionDemo);

	accordionDemo.$inject = ['APP_GLOBALS'];
	function accordionDemo(APP_GLOBALS) {
	  var vm = this;
	  
	  var modulePath = APP_GLOBALS.appModulesPath + 'angular-bootstrap-ui/';
	  vm.customTemplate = modulePath + 'accordion/accordion.custom-template.html';
	  
	  vm.groups = [
	    {title: 'Dynamic Group Header 1', content: 'Dynamic Group Body 1'}, 
	    {title: 'Dynamic Group Header 2', content: 'Dynamic Group Body 2'}
	  ];
	  
	  

	}
})();