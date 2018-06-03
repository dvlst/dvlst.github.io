var app = angular.module('myApp', ['ngRoute']);

app.controller('IndexController', function($scope, $http) {
	$http({
	  method: 'GET',
	  url: 'https://dvelda.github.io/'
	}).then(function successCallback(response) {
	    console.log("iz da");
	  }, function errorCallback(response) {
		  console.log("iz nid da")
	  });
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/music", {
        templateUrl : "sites/music.html"
    })
    .otherwise({
    	templateUrl:"sites/start.html"
    });
});
