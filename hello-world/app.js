(function(){
	'use strict';

	var controller = (function(){  
		function controller(){
			this.name = 'Pedro2';
		}

		return controller;
	})();

	var helloWorld = function(){
		return {
			replace: true,
			template: '<h1>{{ vm.name }}</h1>'
		}
	};

	angular
		.module('demo', [])
		.controller('ShareScopeController', controller)
		.directive('helloWorldPlannet', helloWorld);

})();