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
			template: '<h1>Isolate Scope Two-way Binding</h1><br/><input type="text" ng-model="name" />' +
				'<br/><br/><button ng-click="name=\'James\'">Change Name</button>'
		}
	};

	angular
		.module('demo', [])
		.controller('MainController', controller)
		.directive('helloWorld', helloWorld);

})();