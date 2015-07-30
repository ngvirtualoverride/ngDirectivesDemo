(function(){
	'use strict';

	var userInfoCard = function(){
		return {
			restrict: 'E',
			template: 'Name: {{ user.name }} <br/> Address: <br/> City: {{ user.Address.City }}';
		}
	};

	angular
		.directive('userInfoCard', userInfoCard);

})();