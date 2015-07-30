(function(){
	'use strict';

	var controller = (function(){
		var contactService;

		controller.$inject = ['ContactService'];

		function controller(ContactService){
			var vm = this;
			contactService = ContactService;

			contactService.get()
			  	.success(function(data, status, headers, config){
					vm.contacts = data.contacts;
			  	})
				.error(function(data, status, headers, config){
			  	   	console.log(data);
			  	});
		}

		Object.defineProperty(controller.prototype, 'state', {
			get: function(){
				return contactService.state;
			},
			set: function(value){
				contactService.state = value;
			}
		});

		Object.defineProperty(controller.prototype, 'selectedContact', {
			get: function(){
				return contactService.selectedContact;
			},
			set: function(value){
				contactService.selectedContact = value;
			}			
		});

		return controller;
	})();

	var appDemo = function(){
		return {
			restrict: 'E',
			templateUrl: 'app.html',
			controller: controller,
			controllerAs: 'vm',
		}
	};

	angular
		.module('demo', [])
		.directive('appDemo', appDemo);

})();