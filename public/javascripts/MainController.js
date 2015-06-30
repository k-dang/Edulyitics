var mainControl = angular.module('app',[]);

mainControl.controller("MainController", function(){
	var vm = this;
	vm.title = 'Eduyltics';
	vm.master = {};
	vm.login = function(user){
		vm.master = angular.copy(user);
	};
});