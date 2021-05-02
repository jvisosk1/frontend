(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['LocalDataService', 'ApiPath'];
function UserInfoController(LocalDataService, ApiPath) {
  
  var $ctrl = this;
  $ctrl.userInfo = LocalDataService.getUserInfo();
  $ctrl.basePath = ApiPath;

  // Get favdish details.
  if ($ctrl.userInfo) {
    LocalDataService.getMenuItem($ctrl.userInfo.favorite)
    .then(function(response) {
      $ctrl.favoriteName = response.data.name;
      $ctrl.favoriteDesc = response.data.description;
    });
  }

}

})();
