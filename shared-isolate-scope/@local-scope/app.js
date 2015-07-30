(function(){
	'use strict';

	var controller = (function(){
		function controller(){
			this.name = 'Jose';
		}

		return controller;
	})();

	var helloWorld = function(){
		return {
			scope: {
				name: '@'
			},
			template: '<h1>{{ name }}</h1>'
		}
	};

	angular
		.module('demo', [])
		.controller('MainController', controller)
		.directive('helloWorld', helloWorld);

})();