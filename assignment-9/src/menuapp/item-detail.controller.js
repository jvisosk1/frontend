(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['items_per_category', 'MenuDataService']
function ItemDetailController(items_per_category, MenuDataService) {
	var itemDetail = this;
	itemDetail.names = [];

	for (var i = 0; i < items_per_category.data.menu_items.length; i++) {
			itemDetail.names.push(items_per_category.data.menu_items[i].name)
	}
}

})();
