'use strict';
var app = angular.module('beMyApp-FullStack');

app.controller('menuCtrl', ['$scope', function ($scope) {
	$scope.title = "Habba babba";
	$scope.text = "Le contenu";
	$scope.showMe = false;
	this.psedo = "Pas de psedo";

	this.newPsedo = function () {
		if(confirm('Vous voulez utilisez le psedo : ' + this.psedo)) {
			$scope.showMe = !$scope.showMe;
		}
	}
}])
