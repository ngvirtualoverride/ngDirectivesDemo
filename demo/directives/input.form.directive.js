(function(){
	'use strict';

	var inputController = (function(){

		function inputController(){
		}

		inputController.prototype.validate = function(){
			return this.form[this.name].$invalid && !this.form[this.name].$pristine;
		};

		return inputController;
	})();

	var inputForm = function(){
		return {
			templateUrl: 'directives/input.form.directive.tpl.html',
			scope: {
				form: '=',
				name: '@',
				ngModel: '=',
				isreadonly: '=',
				labels: '='
			},
			bindToController: true,
			controller: inputController,
			controllerAs: 'inputCtrl'
		}
	};

	angular
  		.module('demo')
  		.directive('inputForm', inputForm);

})();
