(function(){
	'use strict';

	var helloWorldController = (function(){
		function helloWorldController(){
			this.hello = "Hello World";
		}

		helloWorldController.prototype.clickMe = function(){
			this.hello = "Hello Planet";
		};

		return helloWorldController;
	})();

	var helloWorld = function(){
		return {
			template: '<h1>{{ vm.hello }}</h1><br/><button ng-click="vm.clickMe()">Click Me</button>',
			controller: helloWorldController,
			controllerAs: 'vm'
		}
	};

	angular
		.module('demo', [])
		.directive('helloWorld', helloWorld);

})();