(function(){
	'use strict';

	var controller = (function(){
		function controller(){
			this.header = 'Hello World';
		}

		return controller;
	})();

	var helloWorld = function(){
		return {
			scope: {
				header: '@'
			},
			template: '<h1>{{ header }}</h1>'
		}
	};

	angular
		.module('demo', [])
		.controller('MainController', controller)
		.directive('helloWorld', helloWorld);

})();