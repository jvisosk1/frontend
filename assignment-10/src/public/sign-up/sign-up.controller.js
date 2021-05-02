(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['LocalDataService'];
function SignUpController(LocalDataService) {
  var $ctrl = this;

  $ctrl.verifyItem = function (favorite) {
  	
  	if(typeof(favorite) == undefined)
  		return

  	if(favorite.length == 0){
  		$ctrl.emptyField = true
  	}

	var promise = LocalDataService.getMenuItem(favorite);

    promise
    .then(function(response) {
      $ctrl.validItem = true;
      console.log("GREAT CHOICE!")
    })
    .catch(function(error) {
      // Set error msg in view if no menu item found
       if (!$ctrl.emptyField){
       	$ctrl.validItem = false;
       }
    });
  	console.log("hello world: " + favorite)

  	



  }

  // On submission of the sign up form.
  $ctrl.submit = function (userInfo) {

    var promise = LocalDataService.getMenuItem(userInfo.favorite);
 	$ctrl.errorMenuLookup = false

    promise
    .then(function(response) {
      LocalDataService.setUserInfo(userInfo);
      $ctrl.successful = true;
      $ctrl.errorMenuLookup = false
    })
    .catch(function(error) {
      // Set error msg in view if no menu item found
      $ctrl.errorMenuLookup = true
    });

  };
}

})();
