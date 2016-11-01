//putting the controller declaration in IIFE to keep the gloabl scope clean
(function(){
    "use strict";

//Define App Controller
angular
	.module("emailApp")
	.controller('EmailAppController', ["$scope",'$timeout',function ($scope,$timeout) {
        
            $scope.useremail = "";
	        $scope.message="";
	        $scope.showmessage=false;
	        $scope.showbutton=false;
	        $scope.buttontext="";
	        $scope.removebtn=function(){$scope.showbutton=false}; //function to remove email button

	        $scope.validateEmail = function(useremail){ //email validation function

							        	//console.log(useremail);
							        	var sp=useremail;
									  	if (sp != null && !sp.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]*\.([a-z]{2,4})$/)) {   
											$scope.message='Enter valid email address';
											$scope.showmessage=true;

										} else { //if email is valid then dont show the error message, show the button, remove email address from text box.

											$scope.showmessage=false;
											$scope.showbutton=true;
											$scope.buttontext=$scope.useremail;
											$scope.useremail=""
											$scope.makebutton(); //this function will only be used when directive is used
										}
									};

			$scope.makebutton=function(){ //function to create button through directive - it triggers a click on the directive.
									$timeout(function() {
				    					angular.element('#emlbtn').triggerHandler('click');
				    				},0);
								};
	      
	    }//end of controller function
	]);//end of controller declaration

}()); //end of IIFE 