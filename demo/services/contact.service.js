(function(){
	'use strict';

	var contactService = (function(){
		var http, __state, __selectedContact;

		contactService.$inject = ['$http'];

		function contactService($http){
			http = $http;
			this.state = 'list';
		}

		Object.defineProperty(contactService.prototype, 'state', {
			get: function(){
				return __state;
			},
			set: function(value){
				__state = value;
			}
		});

		Object.defineProperty(contactService.prototype, 'selectedContact', {
			get: function(){
				return __selectedContact;
			},
			set: function(value){
				__selectedContact = value;
			}			
		});

		contactService.prototype.get = function(){
			return http.get('data/contacts.json');
		};

		return contactService;
	})();

	angular
		.module('demo')
		.service('ContactService', contactService);

})();