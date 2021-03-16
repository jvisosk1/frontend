(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showBoughtList = this;
  showBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
  showBoughtList.numItems = ShoppingListCheckOffService.getNumberBoughtItems();


  showBoughtList.getItemsBought = function () {
    return ShoppingListCheckOffService.getNumberBoughtItems();
  };

  // console.log(ShoppingListCheckOffService.getNumberBoughtItems())

  // if (showBoughtList.items.length > 0){
  //   console.log(ShoppingListCheckOffService)
  //   showBoughtList.checkEmpty = false;
  // }
  // else showBoughtList.checkEmpty = true
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [
    {name: "milks", quantity: 3, pricePerItem: 3},
    {name: "eggs", quantity: 12, pricePerItem: 1},
    {name: "breads", quantity: 2, pricePerItem: 2},
    {name: "chickens", quantity: 5, pricePerItem: 6},
    {name: "tortillas", quantity: 8, pricePerItem: 4}];

  var itemsBought = []

  service.addItem = function (item) {
    itemsBought.push(item);
    service.errorMsg = "Hello"
    console.log(service.getNumberBoughtItems())
  };

  service.getNumberBoughtItems = function () {
    return itemsBought.length
  }

  service.removeItem = function (itemIndex) {
    service.addItem(items[itemIndex])
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function () {
    return itemsBought;
  };

}

})();
