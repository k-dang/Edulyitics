angular.module('myApp').controller("lineCtrl", ['$scope','dataService',function($scope,dataService) {
	$scope.title = 'Preview';
	var tempdatalist = [];
	var weightlist = dataService.getLabel("weight");
	var datalist = dataService.getLabel("data");
	var marklist = dataService.calcAverage(datalist,weightlist);
	$scope.label = dataService.getLabel("label");
	$scope.series = ['Test Mark', 'Total Mark'];
	$scope.data = [datalist,marklist];
	$scope.colours = [
      { // dark grey
      	fillColor: 'rgba(77,83,96,0.2)',
      	strokeColor: 'rgba(77,83,96,1)',
      	pointColor: 'rgba(77,83,96,1)',
      	pointStrokeColor: '#fff',
      	pointHighlightFill: '#fff',
      	pointHighlightStroke: 'rgba(77,83,96,1)'
      },
      { // grey
      	fillColor: 'rgba(255,255,177,0)',
      	strokeColor: 'rgba(255,0,0,1)',
      	pointColor: 'rgba(255,0,0,1)',
      	pointStrokeColor: '#fff',
      	pointHighlightFill: '#fff',
      	pointHighlightStroke: 'rgba(148,159,177,0.8)'
      }
      ];
      $scope.onClick = function (points, evt) {
      	console.log(points, evt);
      };
      $scope.testButton = function(Test){
      	var tempdata = {"label":Test.testID,"data":Test.gradeInput,"weight":Test.weightInput};
      	tempdatalist.push(tempdata);
      	dataService.updateData(tempdata);
      	$scope.authTest = Test.testID;
      	$scope.authTest2 = Test.gradeInput;
      	$scope.label.push(Test.testID);
      	$scope.data[0].push(Test.gradeInput);
      	$scope.data[1].push(dataService.getUpdatedTotalMark(Test.gradeInput,$scope.data[1],weightlist,Test.weightInput));
      };
      $scope.options = {
      	multiTooltipTemplate : function (label) {
      		if (label.datasetLabel == 'Test Mark'){
      			return label.datasetLabel + ':' +label.value +"%" + ", weight="+dataService.getWeight(label.label,dataService.getData())+"%";
      		}else{
      			return label.datasetLabel + ':' +Math.round(label.value*100)/100+"%";
      		}
      	}
      };
}]);