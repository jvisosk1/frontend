(function () {
'use strict';

angular.module('MenuApp')
.component('menuApp', {
  templateUrl: 'src/menuapp/templates/menuapp.template.html',
  bindings: {
    categories: '<',
    items_per_category: '<'
  }
});

})();
