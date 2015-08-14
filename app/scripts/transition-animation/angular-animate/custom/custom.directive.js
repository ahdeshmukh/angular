(function() {
	'use strict';
	
	angular
	.module('angularApp.transitionAnimations')
	.directive('customAnimate', customAnimate);

	function customAnimate() {
		
		var directive = {
			restrict: 'AE',
			scope: {
				fruit:"@",
				showFruit:"&"
			},
			template: '<button class="btn btn-default" ng-click="showFruit({fruit: fruit})" >{{fruit}}</button>' + 
								'<div class="custom-animate-fruit"></div>',
			link: link
		};
		
		return directive;
		
		
		function link(scope, element, attrs) {
			scope.showFruit = function(fruit) {
				var toAppend = 'No image available';
				if(fruit.fruit) {
					var img = 'scripts/transition-animation/angular-animate/custom/images/' + fruit.fruit + '.jpg';
					toAppend = '<img src="' + img + '" />';
				}
				element.find('.custom-animate-fruit').append(toAppend);
			};
		}
		
	}
	
})();