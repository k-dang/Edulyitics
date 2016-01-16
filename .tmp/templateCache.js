angular.module('edulyticsApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/dashboard.html',
    "<html ng-app=\"myApp\"> <head> <base href=\"/\"> <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css\"> <link href=\"http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic\" rel=\"stylesheet\" type=\"text/css\"> <link rel=\"stylesheet\" href=\"../stylesheets/preview.css\"> <link rel=\"stylesheet\" href=\"../stylesheets/angular-chart.css\"> <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular.min.js\"></script> <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js\"></script> <script src=\"../javascripts/app.js\"></script> <script src=\"../javascripts/homeController.js\"></script> <script src=\"../javascripts/lineController.js\"></script> <script src=\"../javascripts/pieController.js\"></script> <script src=\"../javascripts/appRoutes.js\"></script> <script src=\"../javascripts/libs/Chart.js\"></script> <script src=\"../javascripts/libs/angular-chart.js\"></script> </head> <body ng-controller=\"homeCtrl\"> <!--NAVBAR --> <nav class=\"navbar navbar-default\"> <div class=\"container\"> <div class=\"navbar-header\"> <a class=\"navbar-brand\" href=\"/\">Angular Routing Example</a> </div> <ul class=\"nav navbar-nav navbar-right\"> <li><a href=\"/Home\"><i class=\"fa fa-home\"></i> Home</a></li> <li><a href=\"/Line\"><i class=\"fa fa-shield\"></i> Line</a></li> <li><a href=\"/Pie\"><i class=\"fa fa-shield\"></i> Pie</a></li> </ul> </div> </nav> <!-- this is where content will be injected --> <div ng-view></div> </body> </html>"
  );


  $templateCache.put('views/home.html',
    "<div class=\"jumbotron text-center\"> <h1>Home Page</h1> <p>{{ message }}</p> </div>"
  );


  $templateCache.put('views/piegraph.html',
    "<!-- <!DOCTYPE html>\n" +
    "<html>\n" +
    "<head lang=\"en\">\n" +
    "\t<meta charset=\"UTF-8\">\n" +
    "\t<title>Edulytics Preview</title>\n" +
    "\t<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css\">\n" +
    "\t<link href=\"http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic\"\n" +
    "\trel=\"stylesheet\" type=\"text/css\">\n" +
    "\t<link rel=\"stylesheet\" href=\"../stylesheets/preview.css\">\n" +
    "\t<link rel=\"stylesheet\" href=\"../stylesheets/angular-chart.css\">\n" +
    "</head>\n" +
    "<body ng-app=\"app\" ng-controller=\"PieCtrl\"> --> <div class=\"container\"> <h1>{{title}}</h1> <br> <div class=\"row\"> <div class=\"col-md-12\"> <div class=\"col-md-6\"> <div class=\"col-md-12\"> <canvas id=\"tables\" class=\"chart chart-pie\" data=\"data\" labels=\"label\" colours=\"colours\" height=\"600\" width=\"600\" series=\"series\" options=\"options\"></canvas> </div> </div> <div class=\"col-md-6\"> <div class=\"col-md-12\"> <div class=\"alert alert-info check-element animate-show\" ng-show=\"authTest\"> Test ID: {{authTest}}<br> Grade: {{authTest2}} </div> <form name=\"addDataForm\" class=\"form-horizontal\" ng-submit=\"testButton(Test)\"> <div class=\"form-group\"> <label class=\"col-sm-2 control-label\" for=\"testID\">Test ID</label> <div class=\"col-sm-10\"> <input id=\"testID\" class=\"form-control\" name=\"testID\" type=\"text\" placeholder=\"\" ng-model=\"Test.testID\"> </div> </div> <!-- <div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t<label class=\"col-sm-2 control-label\" for=\"gradeInput\">Grade</label>\n" +
    "\t\t\t\t\t\t\t<div class=\"col-sm-5\">\n" +
    "\t\t\t\t\t\t\t\t<input id=\"gradeInput\" class=\"form-control\" name=\"gradeInput\" type=\"number\" placeholder=\"\" ng-model=\"Test.gradeInput\">\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div> --> <div class=\"form-group\"> <label class=\"col-sm-2 control-label\" for=\"weightInput\">Weight</label> <div class=\"col-sm-5\"> <input id=\"weightInput\" class=\"form-control\" name=\"weightInput\" type=\"number\" placeholder=\"\" ng-model=\"Test.weightInput\"> </div> </div> <div class=\"form-actions\"> <div class=\"col-sm-2\"> <button type=\"submit\" class=\"btn btn-default\">Add</button> </div> </div> </form> </div> </div> </div> </div> </div> <!-- <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular.min.js\"></script>\n" +
    "<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js\"></script>\n" +
    "\t<script src=\"../javascripts/app.js\"></script>\n" +
    "\t<script src=\"../javascripts/pieController.js\"></script>\n" +
    " \t<script src=\"../javascripts/libs/Chart.js\"></script>\n" +
    " \t<script src=\"../javascripts/libs/angular-chart.js\"></script>\n" +
    " </body>\n" +
    " </html> -->"
  );


  $templateCache.put('views/preview.html',
    "<!-- <!DOCTYPE html>\n" +
    "<html>\n" +
    "<head lang=\"en\">\n" +
    "    <meta charset=\"UTF-8\">\n" +
    "    <title>Edulytics Preview</title>\n" +
    "    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css\">\n" +
    "    <link href=\"http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic\"\n" +
    "    rel=\"stylesheet\" type=\"text/css\">\n" +
    "    <link rel=\"stylesheet\" href=\"../stylesheets/preview.css\">\n" +
    "    <link rel=\"stylesheet\" href=\"../stylesheets/angular-chart.css\">\n" +
    "</head>\n" +
    "<body ng-app=\"app\" ng-controller=\"lineCtrl\"> --> <div class=\"container\"> <h1>{{title}}</h1> <br> <div class=\"row\"> <div class=\"col-md-12\"> <div class=\"col-md-6\"> <div class=\"col-md-12\"> <canvas id=\"tables\" class=\"chart chart-line\" data=\"data\" labels=\"label\" colours=\"colours\" height=\"600\" width=\"600\" series=\"series\" options=\"options\"></canvas> </div> </div> <div class=\"col-md-6\"> <div class=\"col-md-12\"> <div class=\"alert alert-info check-element animate-show\" ng-show=\"authTest\"> Test ID: {{authTest}}<br> Grade: {{authTest2}} </div> <form name=\"addDataForm\" class=\"form-horizontal\" ng-submit=\"testButton(Test)\"> <div class=\"form-group\"> <label class=\"col-sm-2 control-label\" for=\"testID\">Test ID</label> <div class=\"col-sm-10\"> <input id=\"testID\" class=\"form-control\" name=\"testID\" type=\"text\" placeholder=\"\" ng-model=\"Test.testID\"> </div> </div> <div class=\"form-group\"> <label class=\"col-sm-2 control-label\" for=\"gradeInput\">Grade</label> <div class=\"col-sm-5\"> <input id=\"gradeInput\" class=\"form-control\" name=\"gradeInput\" type=\"number\" placeholder=\"\" ng-model=\"Test.gradeInput\"> </div> </div> <div class=\"form-group\"> <label class=\"col-sm-2 control-label\" for=\"weightInput\">Weight</label> <div class=\"col-sm-5\"> <input id=\"weightInput\" class=\"form-control\" name=\"weightInput\" type=\"number\" placeholder=\"\" ng-model=\"Test.weightInput\"> </div> </div> <div class=\"form-group\"> <div class=\"col-sm-10\"></div> <div class=\"col-sm-2\"> <button type=\"submit\" class=\"btn btn-default\">Add</button> </div> </div> </form> </div> </div> </div> </div> </div> <!-- <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular.min.js\"></script>\n" +
    " \t<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js\"></script>\n" +
    " \t<script src=\"../javascripts/app.js\"></script>\n" +
    "     <script src=\"../javascripts/lineController.js\"></script>\n" +
    "     <script src=\"../javascripts/libs/Chart.js\"></script>\n" +
    " \t<script src=\"../javascripts/libs/angular-chart.js\"></script>\n" +
    " </body>\n" +
    " </html> -->"
  );

}]);
