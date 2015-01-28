var aMailServices= angular.module('AMail', ['ngRoute']);

function emailRouteConfig($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: '../views/list.html',
		controller: 'ListController'
	}).
	when('/view/:id', {
		templateUrl: '../views/detail.html',
		controller: 'DetailController'
	}).
	otherwise({ redirectTo: '/' });
}

aMailServices.config(emailRouteConfig);

messages=[{
	id:0,sender:'aa@yahoo.com.tw',subject:'hi aa',date:'Dec 7,2013',recipients:['greg@bb.com'],message:'jjff'
},{
id:1,sender:'dend@yahoo.com.tw',subject:'hi bb',date:'Dec 7,2012',recipients:['agreg@abb.com'],message:'jjffac'
},{
	id:2,sender:'jaaena@yahoo.com.tw',subject:'hi cc',date:'Dec 7,2011',recipients:['ccgreg@cbb.com'],message:'jjffccc'
}

];

function ListController($scope){
	$scope.messages=messages;
}

function DetailController($scope,$routeParams){
	$scope.message=messages[$routeParams.id];
}