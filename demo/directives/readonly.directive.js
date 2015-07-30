(function(){
	'use strict';

	var inputReadonly = function() {
	 	return {
	 		restrict: 'A',
	 		scope: {
	 			isreadonly: "="
	 		},
	 		link: function(scope, element, attrs){
	 			scope.$watch('isreadonly', function(){
		 			if (scope.isreadonly){
		 				angular
			 				.element(element)[0]
			 				.setAttribute("readonly", "readonly");
		 			} else {
		  				angular
			 				.element(element)[0]
		 					.removeAttribute("readonly");
		 			}
	 			});
	 		}
	 	}
 	};

 	angular
 		.module('demo')
 		.directive('inputReadonly', inputReadonly);

})();