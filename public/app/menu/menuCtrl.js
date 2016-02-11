'use strict';
var app = angular.module('beMyApp-FullStack');

app.controller('menuCtrl', ['$scope', function ($scope) {
	$scope.showMe = false;
	$scope.psedo = "";

	this.newPsedo = function () {
		if($scope.psedo == "") {
			alert("Psedo incorrect");
		} else {
			if(confirm('Do you want to use this psedo : ' + $scope.psedo + ' ?')) {
				$scope.showMe = !$scope.showMe;
			}
		}
	}
}]);
