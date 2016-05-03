'use strict';

var app = angular.module('myApp', []);



app.controller('mainController', function($scope) {
	$scope.items = [{'date': '01/01/2016', 'description': 'fluffy rainbows', 'credit': '10'}, {'date': '01/01/2016', 'description': 'electric bill', 'debit': '-150'}];

	$scope.addItem = () => {
			$scope.items.push($scope.itemToEdit);
			$scope.itemToEdit = {};
	}

	$scope.sortBy = order => {
		if($scope.sortOrder === order) {
			$scope.sortOrder = `-${order}`;
		} else if($scope.sortOrder === `-${order}` ) {
			$scope.sordtOrder = "";
		} else {
			$scope.sortOrder = order;	
		}		

	}

	
	var editingIndex;
	$scope.editingVar = false;

	$scope.editItem = item => {
		$scope.editingVar = true;
		editingIndex = $scope.items.indexOf(item);
    	$scope.itemToEdit = angular.copy(item);
	}

	$scope.saveEdit = () => {
		$scope.editingVar = false;
    	$scope.items[editingIndex] = $scope.itemToEdit;
    	$scope.itemToEdit = null;
	}

	$scope.cancelEdit = () => {
		$scope.contactToEdit = null;
	}

	$scope.removeItem = index => {
		$scope.items.splice(index, 1);
	}

	$scope.getTotalCredits = () => {
    	var totalCredits = 0;
    	for(var item of $scope.items){
    		totalCredits += Number(item.credit) || 0;
    	}
    	console.log(totalCredits);
    	return totalCredits;
    	
	}

	$scope.getTotalDebits = () => {
    	var totalDebits = 0;
    	for(var item of $scope.items){
			totalDebits += Number(item.debit) || 0;
    	}
    	return totalDebits;
	}

	$scope.getBalance = () => {
		var balance = $scope.getTotalCredits() + $scope.getTotalDebits();
		return balance;

	}
});
