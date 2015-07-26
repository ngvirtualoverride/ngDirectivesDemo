(function(){
	'use strict';

	var controller = (function(){
		function controller(){
			this.header = 'Hello World';
		}

		return controller;
	})();


	///	Bi-directional Binding
	/// or Two-way binding
	var helloWorld = function(){
		return {
			scope: {
				header: '='
			},
			template: '<h1>Isolate Scope Two-way Binding</h1><br/><input type="text" ng-model="header" />'
		}
	};

	angular
		.module('demo', [])
		.controller('MainController', controller)
		.directive('helloWorld', helloWorld);

})();