var app = angular.module('mainModule', ['ngRoute','login','addUser','editUser']);

app.config(function ($routeProvider) {
    $routeProvider
        
        .when('/home',
            {
                controller: 'userController',
                templateUrl: 'app/partials/home.html'
            })
        .when('/aboutMe',
            {
                controller: 'homeController',
                templateUrl: 'app/partials/aboutMe.html'
            })
         .when('/aboutUs',
            {
                controller: 'homeController',
                templateUrl: 'app/partials/aboutUs.html'
            })
          .when('/contactUs',
            {
                controller: 'homeController',
                templateUrl: 'app/partials/contactUs.html'
            })
            .when('/settings',
            {
                controller: 'homeController',
                templateUrl: 'app/partials/settings.html'
            })
          .otherwise({ redirectTo: '/home' ,templateUrl: 'home.html'});
	
});


