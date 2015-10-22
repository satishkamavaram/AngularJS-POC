var app = angular.module('login', []);

app.directive('loginAuth',function(){

    return {
           restrict : 'E',
           replace : true,
           templateUrl : "app/partials/login.html",
           controllerAs : "login",
           controller : function($scope,loginService,userService){
        
        this.defaultUsername = "admin";
        this.defaultPassword = "admin";
        this.username;
        this.password;
     
        
    
        this.login = function()
        {
            if(this.username==this.defaultUsername && this.password==this.defaultPassword)
            {
               loginService.userLoggedIn(true);
               alert("Login Success");
            }
            else
            {
              loginService.userLoggedIn(false);
              alert("Invalid Login. Please try again!");
            }
            return;
        };



           }
    };
 
});




