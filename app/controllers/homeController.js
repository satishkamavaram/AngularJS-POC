var app = angular.module('mainModule');

app.controller('homeController', function($scope,menuService){

	$scope.menuss = menuService.getMenus();

    


	
});