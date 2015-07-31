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

	var controller = (function(){

		function controller(){	
			this.isreadonly = false;
			this.firstName = 'Pedro';
		}

		controller.prototype.changeValue = function(){
			this.isreadonly = !this.isreadonly;
		};

		return controller;
	})();

	angular
		.module('demo', [])
		.controller('PersonController', controller)
		.directive('spacebarSupport', spacebarSupport);

})();