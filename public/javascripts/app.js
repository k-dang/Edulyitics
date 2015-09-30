angular.module('app',['chart.js','ngRoute']);

angular.module('app').config(function ($routeProvider,ChartJsProvider) {
	//Configure routes
	$routeProvider
    // route
    .when('/', {
    	templateUrl : '../coursepages/home.html',
    	controller  : 'homeController'
    })
    .when('/Line', {
    	templateUrl : '../coursepages/preview.html',
    	controller  : '?ineCtrl'
    })
    .when('/Pie', {
    	templateUrl : '../coursepages/piegraph.html',
    	controller  : 'PieCtrl'
    });

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

angular.module('app').service('dataService', function(){
	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	var dataobjlist = [
	{"label":"Test1","data":randomScalingFactor(),"weight":10},
	{"label":"Test2","data":randomScalingFactor(),"weight":10},
	{"label":"Test3","data":randomScalingFactor(),"weight":10},
	{"label":"Test4","data":randomScalingFactor(),"weight":10},
	{"label":"Test5","data":randomScalingFactor(),"weight":10},
	{"label":"Test6","data":randomScalingFactor(),"weight":10}
	];

	function getIndexed(arr, val){
		var indexes = []; 
		for (var i = 0; i <arr.length; i++){
			if(val in arr[i]){
				indexes[i] = arr[i][val];
			}
		}
		return indexes;
	}

	this.getData = function(){
		return dataobjlist;
	}

	this.updateData = function(tempdata){
		dataobjlist.push(tempdata);
	}

	this.getLabel = function(name){
		return getIndexed(dataobjlist,name);
	}

	this.calcAverage = function(arr,weightarr){
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

	this.getUpdatedTotalMark = function(newgrade,totalmarklist,weightarr,newtestweight){
		var weightsum = weightarr.reduce(function(pv, cv) { return pv + cv; }, 0);
		var latesttotalmark = totalmarklist[totalmarklist.length-1];
		var newweightsum = weightsum + newtestweight;
		var newmarksum = (latesttotalmark/100)*weightsum + (newgrade/100)*newtestweight;
		return (newmarksum/newweightsum)*100;
	}

	this.getWeight = function(label,list){
		for(var i=0;i<list.length;i++){
			if(list[i].label == label){
				return list[i].weight;
			}
		}
	}
});