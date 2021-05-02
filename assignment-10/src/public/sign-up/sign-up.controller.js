(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['LocalDataService'];
function SignUpController(LocalDataService) {
  var $ctrl = this;

  $ctrl.verifyItem = function (favorite) {
  	
  	if(!favorite){
      $ctrl.validItem = false;
  		return
    }

  	if(favorite.length == 0){
  		$ctrl.emptyField = true
  	}

	  var promise = LocalDataService.getMenuItem(favorite.toUpperCase());

    promise
    .then(function(response) {
      $ctrl.validItem = true;
    })
    .catch(function(error) {
      // Set error msg in view if no menu item found
       if (!$ctrl.emptyField){
       	$ctrl.validItem = false;
       }
    });
  }

  // On submission of the sign up form.
  $ctrl.submit = function (userInfo) {

    var promise = LocalDataService.getMenuItem(userInfo.favorite.toUpperCase());
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
