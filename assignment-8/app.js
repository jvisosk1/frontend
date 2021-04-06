(function () {
'use strict';


angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundList', FoundListDirective);


function FoundListDirective() {
  var ddo = {
    templateUrl: 'foundList.html',
    scope: {
      items: '<',
      badRemove: '=',
    },
    controller: FoundListDirectiveController,
    controllerAs: 'menu',
    bindToController: true
  };
  return ddo;
}


function FoundListDirectiveController() {
  var menu = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.keyword = ""
  menu.foundItems = []

  menu.removeItem = function (itemIndex) {
    menu.foundItems.splice(itemIndex, 1);
  };

  menu.searchMenuItems = function () {
    var promise = MenuSearchService.getMatchedMenuItems(menu.keyword);

    promise.then(function (response) {
      console.log("Here are the results for input (" + menu.keyword + ")");
      var menuItems = response.data.menu_items
      if(menu.keyword == "")
        menu.keyword = "Nothing found."
      menu.foundItems = []
      for (var i =0; i < menuItems.length; i++) {
        if(menuItems[i].description.includes(menu.keyword)){
          menu.foundItems.push(menuItems[i])
        }
      }
      if(menu.foundItems.length == 0)
        menu.keyword = "Nothing found."
    })
    .catch(function (error) {
      console.log(error);
    })
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  
  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    });
    return response;
  };

  service.removeItem = function (foundItems, itemIndex) {
    foundItems.splice(itemIndex, 1);
    console.log(items)
  };
}

})();