var graphModule = angular.module('preview',['chart.js']);

graphModule.config(function (ChartJsProvider) {
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

graphModule.controller("PreviewController", ['$scope',function($scope) {
	$scope.title = 'Preview';
	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	var dataobjlist = [
  {"label":"Test1","data":randomScalingFactor(),"weight":10},
  {"label":"Test2","data":randomScalingFactor(),"weight":10},
  {"label":"Test3","data":randomScalingFactor(),"weight":10},
  {"label":"Test4","data":randomScalingFactor(),"weight":10},
  {"label":"Test5","data":randomScalingFactor(),"weight":10},
  {"label":"Test6","data":randomScalingFactor(),"weight":10}
  ];
  var tempdatalist = [];
  var weightlist = getIndexed(dataobjlist,"weight");
  var datalist = getIndexed(dataobjlist,"data");
  var marklist = calcAverage(datalist,weightlist);
  $scope.label = getIndexed(dataobjlist,"label");
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
      dataobjlist.push(tempdata);
      console.log(tempdatalist);
      $scope.authTest = Test.testID;
      $scope.authTest2 = Test.gradeInput;
      $scope.label.push(Test.testID);
      $scope.data[0].push(Test.gradeInput);
      $scope.data[1].push(getUpdatedTotalMark(Test.gradeInput,$scope.data[1],weightlist,Test.weightInput));
  };
  $scope.options = {
    multiTooltipTemplate : function (label) {
      if (label.datasetLabel == 'Test Mark'){
        return label.datasetLabel + ':' +label.value +"%" + ", weight="+getWeight(label.label,dataobjlist)+"%";
      }else{
        return label.datasetLabel + ':' +Math.round(label.value*100)/100+"%";
      }
    }
  };
}]);

graphModule.controller("PieCtrl", ['$scope',function($scope) {
  $scope.title = 'PieGraph';
  $scope.label = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
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

function calcAverage(arr,weightarr){
  var avgindexes = [];
  for (var i = 0; i<arr.length; i++){
    var marksum = 0;
    var weightsum = 0;
    var j = i;
    while (j>=0){
      weightsum += weightarr[j];
      marksum += (arr[j]/100)*weightarr[j];
      j--;
    }   
    avgindexes[i] = (marksum/weightsum)*100;
  }
  return avgindexes;
}

function getUpdatedTotalMark(newgrade,totalmarklist,weightarr,newtestweight){
  var weightsum = weightarr.reduce(function(pv, cv) { return pv + cv; }, 0);
  var latesttotalmark = totalmarklist[totalmarklist.length-1];
  var newweightsum = weightsum + newtestweight;
  var newmarksum = (latesttotalmark/100)*weightsum + (newgrade/100)*newtestweight;
  return (newmarksum/newweightsum)*100;
}

function getWeight(label,list){
  for(var i=0;i<list.length;i++){
    if(list[i].label == label){
      return list[i].weight;
    }
  }
}