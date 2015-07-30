(function(){
	'use strict';

	var userController = (function(){
		var userService, __users;

		userController.$inject = ['$scope', 'UserService'];

		function userController($scope, UserService){
			userService = UserService;

			userService
				.getAllUsers()
				.success(function(data, status, headers, config){
					$scope.user = data.users[0];
				})
				.error(function(data, status, headers, config){
					console.log('error');
				});			
		}

		return userController;
	})();


	angular
		.module('demo')
		.controller('UserController', userController);

})();