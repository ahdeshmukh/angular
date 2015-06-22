(function() {
	'use strict';
	
	angular
		.module('angularApp.directives')
		.directive('domDirective', domDirective);
	
	function domDirective() {
		var directive = {
			link: link
		};
		
		return directive;
	}
	
	function link($scope, element, attrs) {
		element.bind('click', function () {
			element.html('You clicked me!');
    });
    element.bind('mouseenter', function () {
    	element.css('background-color', 'yellow');
    });
    element.bind('mouseleave', function () {
    	element.css('background-color', 'white');
    });
	}
	
})();