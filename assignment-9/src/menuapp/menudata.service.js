(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', '$q', '$timeout']
function MenuDataService($http, $q, $timeout) {
  var service = this;

  // List of shopping items
  var items = [];

  // API call to server, returns a promise
  service.getCategories = function () {

    var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/categories.json"
    });
    return response;
  };

  // API call to server, returns a promise
  service.getItemsForCategory = function (category_shortname) {

    var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + category_shortname
    });
    // console.log(response)
    return response;
  };
}

})();
