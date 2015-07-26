(function(){
	'use strict';

	var helloWorld = function(){
		return {
			template: '<h1>Hello World</h1>'
		}
	};

	angular
		.module('demo', [])
		.directive('helloWorld', helloWorld);

})();