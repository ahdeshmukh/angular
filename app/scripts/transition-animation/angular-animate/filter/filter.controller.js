(function(){
	'use strict';
	
	angular
		.module('angularApp.transitionAnimations')
		.controller('AngularAnimateFilter', angularAnimateFilter);
	
	function angularAnimateFilter() {
		
		var vm = this;
		
		vm.songs = ['Sgt. Peppers Lonely Hearts Club Band','With a Little Help from My Friends','Lucy in the Sky with Diamonds','Getting Better' ,'Fixing a Hole','Shes Leaving Home','Being for the Benefit of Mr. Kite!' ,'Within You Without You','When Im Sixty-Four','Lovely Rita','Good Morning Good Morning','Sgt. Peppers Lonely Hearts Club Band (Reprise)','A Day in the Life'];;
		
	}
	
	
})();