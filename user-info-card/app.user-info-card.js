(function(){
	'use strict';

	var userInfoCard = function(){
		return {
			restrict: 'E',
			templateUrl: 'app.user-info-card.html',
			scope: {
				user: '='
			},
			bindToController: true,
			controller: UserInfoCard.Controller,
			controllerAs: 'vm'
		}
	};

	angular
		.module('demo')
		.directive('userInfoCard', userInfoCard);

})();