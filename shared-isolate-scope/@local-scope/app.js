(function(){
	'use strict';

	var controller = (function(){
		function controller(){
			this.name = 'Jose';

			this.names = [
				"Pedro", "James"
			];
		}

		return controller;
	})();

	var helloWorld = function(){
		return {
			scope: {
				firstName: '@'
			},
			template: '<h1>{{ firstName }}</h1>'
		}
	};

	angular
		.module('demo', [])
		.controller('MainController', controller)
		.directive('helloWorld', helloWorld);

})();