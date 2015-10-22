var app = angular.module('mainModule');
app.service('menuService', function(){
	
	this.getMenus = function(){
           return menus;
	};

	var menus = [{name:"Home",url:"#/home",active:true},
	             {name:"AboutMe",url:"#/aboutMe",active:false},
	             {name:"AboutUs",url:"#/aboutUs",active:false},
	             {name:"ContactUs",url:"#/contactUs",active:false},
	             {name:"Settings",url:"#/settings",active:false}]
	             

});