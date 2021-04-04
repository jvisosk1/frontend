(function () {
'use strict';

angular.module('MenuCategoriesApp', [])
.controller('MenuCategoriesController', MenuCategoriesController)
.service('MenuItemsService', MenuItemsService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuCategoriesController.$inject = ['MenuItemsService'];
function MenuCategoriesController(MenuItemsService) {
  var menu = this;

  var promise = MenuItemsService.getMenuItems();

  promise.then(function (response) {
    menu.categories = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  menu.logMenuItems = function (shortName) {
    var promise = MenuItemsService.getMenuForCategory(shortName);

    promise.then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

}


MenuItemsService.$inject = ['$http', 'ApiBasePath'];
function MenuItemsService($http, ApiBasePath) {
  var service = this;

  service.getMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/category-items.json")
    });

    return response;
  };


  service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  };

}

})();