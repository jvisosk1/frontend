(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/menuapp/templates/main-menuapp.template.html',
    controller: 'MainMenuAppController as mainList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getCategories();
      }]
    }
  })

  .state('itemDetail', {
    url: '/item-detail/{category_index}',
    templateUrl: 'src/menuapp/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      items_per_category: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getCategories()
                .then(function (categories) {
                  var short_name = categories.data[$stateParams.category_index].short_name
                  return MenuDataService.getItemsForCategory(short_name)                  
                });
            }]
    }
  });
}

})();
