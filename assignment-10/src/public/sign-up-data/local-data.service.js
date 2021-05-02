(function () {
'use strict';

angular.module('data')
.service('LocalDataService', LocalDataService);

LocalDataService.$inject = ['$http', 'ApiPath'];
function LocalDataService($http, ApiPath) {
    var service = this;

    var firstname = '';
    var lastname = '';
    var email = '';
    var phone = '';
    var favdish = '';

    // Get menu item specified from API.
    service.getMenuItem = function(shortName) {
        var response = $http({
          method: "GET",
          url: ApiPath +"/menu_items/" + shortName + ".json",
        })

        return response;
    }

    // Set user information to local storage.
    // TIP:
    // See Storage tab in devtools to remove these items from localStorage.
    service.setUserInfo = function(userInfo) {

        localStorage.setItem('firstname', userInfo.firstname);
        localStorage.setItem('lastname', userInfo.lastname);
        localStorage.setItem('email', userInfo.email);
        localStorage.setItem('phone', userInfo.phone);
        localStorage.setItem('favorite', userInfo.favorite);


        return true;
    };

    // Get user information from local storage.
    service.getUserInfo = function() {

        var result = {};

        if (!localStorage.getItem('firstname')) {
          return null;
        }
        else {
          result = {
            firstname : localStorage.getItem('firstname'),
            lastname : localStorage.getItem('lastname'),
            email : localStorage.getItem('email'),
            phone : localStorage.getItem('phone'),
            favorite : localStorage.getItem('favorite'),
          }
          return result;
        }
    };

} // jeff; 123

})();
