var app = angular.module('editUser', []);

app.directive('editUser',function(){

    return {
           restrict : 'E',
           replace : true,
           templateUrl : "app/partials/editUser.html",
           controllerAs : "editUser",
           controller : function($scope,userService){
          
      



           }
    };
 
});
