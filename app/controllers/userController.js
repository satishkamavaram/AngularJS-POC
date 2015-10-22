var app = angular.module('mainModule');

app.controller('userController', function($scope,userService){


        this.getAllUsers = function(){
            return userService.getAllUsers();
        };
    
        
});