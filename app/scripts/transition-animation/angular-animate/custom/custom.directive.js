(function() {
	'use strict';
	
	angular
	.module('angularApp.transitionAnimations')
	.directive('customAnimate', customAnimate);
	
	customAnimate.$inject = ['$animate'];

	function customAnimate($animate) {
		
		var directive = {
			restrict: 'AE',
			scope: {
				fruit:"@",
				showFruit:"&"
			},
			template: '<button class="btn btn-default" ng-click="showFruit({fruit: fruit});">{{fruit}}</button>' + 
								'<div class="custom-animate-fruit"></div>',
			link: link
		};
		
		return directive;
		
		
		function link(scope, element, attrs) {
			scope.showFruit = function(fruit) {
				var toAppend = null;
				if(fruit.fruit) {
					var img = 'scripts/transition-animation/angular-animate/custom/images/' + fruit.fruit + '.jpg';
					toAppend = '<img class="custom-animate-fruit-image" src="' + img + '" />';
					element.find('.custom-animate-fruit').append(toAppend);
					
					var fruitImage = element.find('.custom-animate-fruit-image');
					angular.forEach(fruitImage, function(value) {
						$animate.addClass(value, "show-fruit-image-animation");
					});
					
				}
			};
		}
		
	}
	
})();