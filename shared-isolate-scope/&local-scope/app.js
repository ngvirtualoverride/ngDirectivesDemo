(function(){
	'use strict';

	var controller = (function(){
		function controller(){
			this.name = 'Juan';
		}

		controller.prototype.changeName = function(){
			this.name = "Jose"
		};

		return controller;
	})();

	var helloWorld = function(){
		return {
			scope: {
				changeName: '&'
			},
			template: '<button ng-click="changeName()">Change Name</button>'
		}
	};

	angular
		.module('demo', [])
		.controller('MainController', controller)
		.directive('helloWorld', helloWorld);

})();