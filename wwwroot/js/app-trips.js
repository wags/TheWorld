﻿// app-trips.js
(function () {

    "use strict";

    // Creating the module
    angular.module("app-trips", ["simpleControls", "ngRoute"])
        .config(function ($routeProvider) {

            $routeProvider.when("/", {
                controller: "tripsController",
                controllerAs: "vm",
                templateUrl: "/views/tripsView.html"
            });

            $routeProvider.otherwise({ redirectTo: "/" });

        });

})();
