var prevControl = angular.module('preview',['chart.js']);

prevControl.config(function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      responsive: true,
      scaleOverride : true,
      scaleSteps : 10,
      scaleStepWidth : 10,
      scaleStartValue : 0 
    });
    // Configure
    ChartJsProvider.setOptions('Line', {
      datasetFill:true
    });
 });

prevControl.controller("PreviewController", ['$scope',function($scope) {
	$scope.title = 'Preview';
	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	var dataobjlist = [
		{"label":"Test1","data":randomScalingFactor()},
		{"label":"Test2","data":randomScalingFactor()},
		{"label":"Test3","data":randomScalingFactor()},
		{"label":"Test4","data":randomScalingFactor()},
		{"label":"Test5","data":randomScalingFactor()},
		{"label":"Test6","data":randomScalingFactor()}
	];
	$scope.label = getIndexed(dataobjlist,"label");
    $scope.data = [getIndexed(dataobjlist,"data")];
    $scope.data2 = $scope.data[0];
	$scope.colours = [
      { // grey
        fillColor: 'rgba(148,159,177,0.2)',
        strokeColor: 'rgba(148,159,177,1)',
        pointColor: 'rgba(148,159,177,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(148,159,177,0.8)'
      },
      { // dark grey
        fillColor: 'rgba(77,83,96,0.2)',
        strokeColor: 'rgba(77,83,96,1)',
        pointColor: 'rgba(77,83,96,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(77,83,96,1)'
      }
    ];
    $scope.onClick = function (points, evt) {
    	console.log(points, evt);
  	};
  	$scope.testButton = function(Test){
		$scope.authTest = Test.testID;
		$scope.authTest2 = Test.gradeInput;
		$scope.label.push(Test.testID);
		$scope.data[0].push(Test.gradeInput);
	}
}]);

function getIndexed(arr, val){
	var indexes = [];
	for (var i = 0; i <arr.length; i++){
		if(val in arr[i]){
			indexes[i] = arr[i][val];
		}
	}
	return indexes
}	
