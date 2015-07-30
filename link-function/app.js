(function(){
	'use strict';

	var spacebarSupport = function(){
		return {
		    restrict: 'A',
		    link: function(scope, el, attrs) {
				$('body').on('keypress', function(evt) {
					var vidEl = el[0];
					if(evt.keyCode === 32) {
						if(vidEl.paused) {
						  vidEl.play();
						} else {
						  vidEl.pause();
						}
					}
		      	});
		    }
		}
	};

	angular
		.module('demo', [])
		.directive('spacebarSupport', spacebarSupport);

})();