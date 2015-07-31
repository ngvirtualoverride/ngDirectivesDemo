(function(){
	'use strict';

	var helloWorldController = (function(){
		function helloWorldController(){
			this.hello = "Hello World";
		}

		helloWorldController.prototype.clickMe = function(){
			this.name = "Jane";
		};

		return helloWorldController;
	})();

	var helloWorld = function(){
		return {
			scope: {
				name: '@'
			},
			bindToController: true,
			template: '<h1>From Parent {{ vm.name }}</h1><h1>{{ vm.hello }}</h1><br/><button ng-click="vm.clickMe()">Click Me</button>',
			controller: helloWorldController,
			controllerAs: 'vm'
		}
	};

	var parentController = (function(){

		parentController.$inject = ['Service'];

		function parentController(Service){
			this.name = 'Pedro1';
		}

		return parentController;
	})();

	angular
		.module('demo', [])
		.controller('ParentController', parentController)
		.directive('helloWorld', helloWorld);

})();