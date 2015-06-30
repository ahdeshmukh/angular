/*
 * http://forum.ionicframework.com/t/how-to-opening-links-in-content-in-system-browser-instead-of-cordova-browser-wrapper/2427
 */
(function() {
	'use strict';
	
	angular
		.module('angularApp.directives')
		.directive('a', hyperlinkDirective);
	
	function hyperlinkDirective() {
	    
		var directive = {
		  restrict: 'E',
		  link: link
		};
	    
	  return directive;
	    
	  function link(scope, element, attrs) {
	  	if (!attrs.href){
	  		return;
	    }
	    var externalRe = new RegExp('^(http|https)://');
	    var url = attrs.href;
	
	    if(externalRe.test(url)) {
	    	element.on('click',function(e){
	    		e.preventDefault();
	    		if(attrs.ngClick){
	    			scope.$eval(attrs.ngClick);
	    		}
	    		window.open(encodeURI(url), '_blank');
	    		//window.open(encodeURI(url), '_system'); for ionic framework to make sure the links open in the phone's system browser
	    	});	
	    }
	  }
	}
	
})();