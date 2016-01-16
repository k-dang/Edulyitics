'use strict';
angular.module('myApp').controller('pieCtrl', ['$scope',function($scope) {
	$scope.title = 'PieGraph';
	$scope.label = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
	$scope.data = [300, 500, 100];
	$scope.testButton = function(Test){
		$scope.data.push(Test.weightInput);
		$scope.label.push(Test.testID);
	};
}]);