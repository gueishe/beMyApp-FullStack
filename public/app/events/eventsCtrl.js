'use strict';
var app = angular.module('beMyApp-FullStack');

app.controller('eventsCtrl', ['$scope', function ($scope) {

	$scope.events = [{
		title: "habba1",
		desc: "zefjzefziefie",
		logo: "zeoifzeoij",
		date: "zfezfe"
	}, {
		title: "habba2",
		desc: "zefjzefziefie",
		logo: "zeoifzeoij",
		date: "zfezfe"
	}, {
		title: "habba3",
		desc: "zefjzefziefie",
		logo: "zeoifzeoij",
		date: "zfezfe"
	}, {
		title: "habba4",
		desc: "zefjzefziefie",
		logo: "zeoifzeoij",
		date: "zfezfe"
	}, {
		title: "habba5",
		desc: "zefjzefziefie",
		logo: "zeoifzeoij",
		date: "zfezfe"
	}];

}]);

app.directive("events", function () {
	return {
		restrict: 'EA',
		replace: true,
		transclude: true,
		template: "<div ng-transclude></div>",
		controller: function () {
			var events = [];
			this.gotOpened = function (selectedEvent) {
				events.forEach(function (event) {
					if(selectedEvent != event) {
						event.showMe = false;
					}
				});
			};
			this.addEvent = function (event) {
				events.push(event);
			};
		}
	};
});

app.directive("event", function () {
	return {
		restrict: 'EA',
		replace: true,
		transclude: true,
		require: '^?events',
		scope: {
			title: '=eventTitle'
		},
		template: '<div class="event">' +
			'<div class="title" ng-click="toggle()">{{title}}</div>' +
			'<div class="body" ng-show="showMe" ng-transclude></div>' +
			'</div>',
		link: function (scope, element, attrs, eventsController) {
			scope.showMe = false;
			eventsController.addEvent(scope);
			scope.toggle = function toggle() {
				scope.showMe = !scope.showMe;
				eventsController.gotOpened(scope);
			};
		}
	};
});
