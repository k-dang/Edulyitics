angular.module('app').controller("MainController", function(){
	var vm = this;
	vm.title = 'Eduyltics';
	vm.master = {};
	vm.user ={};
	vm.login = function(user){
		vm.master = angular.copy(user);
	};
});