(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);


MainMenuAppController.$inject = ['categories', 'MenuDataService'];
function MainMenuAppController(categories, MenuDataService) {
	var mainList = this;
	var menuItems = []
	
	var promise = MenuDataService.getCategories();
	promise.then(function (response) {
		for (var i = 0; i < response.data.length; i++) {
			menuItems.push(response.data[i])
		}
	})
	.catch(function (error) {
		console.log(error);
	}) 

  	mainList.categories = menuItems;
}

})();
