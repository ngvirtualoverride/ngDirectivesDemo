(function(){
	'use strict';

	var controller = (function(){
		var contactService;
		
		controller.$inject = [];

		function controller(){
		}

		controller.prototype.edit = function(contact){
			this.state = 'edit';
			this.seletectedContact = contact;
		};

		controller.prototype.detail = function(contact){
			this.state = 'detail';
			this.seletectedContact = contact;
		};

		return controller;
	})();

	var personContact = function(){
		return {
			templateUrl: 'components/person-contact.html',
			scope: {
				contacts: '=',
				state: '=',
				seletectedContact: '='
			},
			bindToController: true,
			controller: controller,
			controllerAs: 'vmMain'
		}
	};

	angular
		.module('demo')
		.directive('personContact', personContact);

})();