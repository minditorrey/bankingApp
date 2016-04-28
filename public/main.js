'use strict';

var app = angular.module('myApp', []);

$scope.items = [];

app.controller('mainController', function($scope) {

	$scope.addItem = () => {
			$scope.items.push($scope.newItem);
			$scope.newItem = {};
	}



});