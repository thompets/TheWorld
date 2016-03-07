// tripsController.js

(function () {
	"use strict";

	angular.module("app-trips")
		.controller("tripsController", tripsController);

	function tripsController($http) {
		var vm = this;

		vm.trips = [];

		vm.newTrip = {};

		vm.errorMessage = "";
		vm.isBusy = true;

		$http.get("/api/trips")
			.then(function (response) {
				// Success
				angular.copy(response.data, vm.trips);
			}, function (err) {
				// Failure
				vm.errorMessage = "Failed to load data: " + err;
			})
			.finally(function () {
				vm.isBusy = false;
			});

		vm.addTrip = function () {
			vm.isBusy = true;
			vm.errorMessage = "";

			$http.post("/api/trips", vm.newTrip)
				.then(function (response) {
					// success
					vm.trips.push(response.data);
					vm.newTrip = {};
				}, function (err) {
					// failure
					vm.errorMessage = "Failed to save new trip: " + err;
				})
				.finally(function () {
					vm.isBusy = false;
				});
		};
	}
})();