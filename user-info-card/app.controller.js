(function(){
	'use strict';

	var userController = (function(){
		var userService, __users;

		userController.$inject = ['UserService'];

		function userController(UserService){
			var vm = this;
			userService = UserService;

			userService
				.getAllUsers()
				.success(function(data, status, headers, config){
					vm.users = data.users;
				})
				.error(function(data, status, headers, config){
					console.log('error');
				});			
		}

		userController.prototype.removeUser = function(user){
			var index = vm.users.indexOf(user);
	        if(index > -1) {
	          vm.users.splice(index, 1);
	        }			
		};

		return userController;
	})();


	angular
		.module('demo')
		.controller('UserController', userController);

})();