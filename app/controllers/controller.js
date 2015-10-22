app.controller('mainController', function($scope,menuService,loginService){

	$scope.menus = menuService.getMenus();

    
     $scope.name  = "satish";

    this.isUserIn = function ()
    {
    	return loginService.isUserLoggedIn();
    };

     this.isUserNotIn = function ()
    {
    	return !loginService.isUserLoggedIn();
    };
	
});