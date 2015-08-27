function getIndexed(arr, val){
	var indexes = [];
	for (var i = 0; i <arr.length; i++){
		if(val in arr[i]){
			indexes.push(arr[i][val]);
		}
	}
	return indexes
}
	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	var dataobjlist = [
		{"label":"Test1","data":randomScalingFactor()},
		{"label":"Test2","data":randomScalingFactor()},
		{"label":"Test3","data":randomScalingFactor()},
		{"label":"Test4","data":randomScalingFactor()},
		{"label":"Test5","data":randomScalingFactor()},
		{"label":"Test6","data":randomScalingFactor()}
	];
	// var obj2 = getIndexed(dataobjlist,"label");
	var lineChartData = {
		labels : getIndexed(dataobjlist,"label"),
		datasets : [
			{
				label: "My First dataset",
				fillColor : "rgba(220,220,220,0.2)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : getIndexed(dataobjlist,"data")
			}
		]
	}

window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true,
        scaleOverride : true,
        scaleSteps : 10,
        scaleStepWidth : 10,
        scaleStartValue : 0 
	});
}
