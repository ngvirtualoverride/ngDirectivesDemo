(function(){
	'use strict';

	var controller = (function(){
		function controller(){
		}

		Object.defineProperty(controller.prototype, '__state', {
			get: function(){
				return this.state === 'detail';
			}
		});

		return controller;
	})();

	var personContactEdit = function(){
		return {
			restrict: 'E',
			templateUrl: 'components/person-contact-edit.html',
			scope: {
				contact: '=',
				state: '='
			},
			bindToController: true,
			controller: controller,
			controllerAs: 'vmEdit'
		}
	};

	angular
		.module('demo')
		.directive('personContactEdit', personContactEdit);

})();