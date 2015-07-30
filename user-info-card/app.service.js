(function(){
	'use strict';

	var userService = (function(){
		var http;

		userService.$inject = ['$http'];

		function userService($http){
			http = $http;
		}

		userService.prototype.getAllUsers = function(){
			return http.get('data/users.json');
		};

		userService.prototype.addUser = function(user, users){
			users.push(user);
		};

		userService.prototype.removeUser = function(user, users){
			var index = users.indexOf(user);
			users.splice(index);
		};

		userService.prototype.updateUser = function(user, users){

		};

		return userService;
	})();

	angular
		.module('demo')
		.service('UserService', userService);	

})();