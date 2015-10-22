var app = angular.module('mainModule');
app.service('userService', function(){
	
	  this.getAllUsers = function(){
            return users;
        }

       
       this.setUsername = function()
       {

       }

	var users = [{username:"Satish",emailId:"satishk@gmail.com"},
	             {username:"Sunil",emailId:"sunilk@gmail.com"},
	             {username:"Namratha",emailId:"namratha@gmail.com"},
	             {username:"Amarnath",emailId:"amrnath@gmail.com"}]
	    
	             

});