(function(){
	'use strict';

	var controller = (function(){
		function controller(){
			this.name = 'Pedro';
		}

		return controller;
	})();


	///	Bi-directional Binding
	/// or Two-way binding
	var helloWorld = function(){
		return {
			scope: {
				name: '='
			},
			templateUrl: 'app.html'
		}
	};

	angular
		.module('demo', [])
		.controller('MainController', controller)
		.directive('helloWorld', helloWorld);

})();