var UserInfoCard;
(function(UserInfoCard){
	'use strict';

	var controller = (function(){
		function controller(){
		}

		controller.prototype.collapse = function(){
			this.collapsed = !this.collapsed;
		};	

		controller.prototype.removeContact = function(contact){
			var index = this.user.contacts.indexOf(contact);
	        if(index > -1) {
	          this.user.contacts.splice(index, 1);
	        }
		};

		return controller;
	})();

	UserInfoCard.Controller = controller;

})(UserInfoCard || (UserInfoCard = {}));