var app = angular.module('addUser', []);

app.directive('addUser',function(){

    return {
           restrict : 'E',
           replace : true,
           templateUrl : "app/partials/addUser.html",
           controllerAs : "addUser",
           controller : function($scope,userService){
        
        this.username;
        this.emailId;
        this.password;
        this.repassword;
    
        this.confirmPassword = function()
        {
            return this.password!=this.repassword;
        };
    
        this.signUp = function()
        {
            alert("Thank you "+this.username+" for registering with us");
            return;
        }



           }
    };
 
});




