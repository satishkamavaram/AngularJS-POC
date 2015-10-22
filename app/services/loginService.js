var app = angular.module('mainModule');
app.service('loginService', function(){
	
	  this.isUserLoggedIn = function(){

            return loggedIn;
        }

       
       this.userLoggedIn = function(status)
       {
           loggedIn = status;
       }

	   var loggedIn = false;
	    
	             

});