(function () {
'use strict'


angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.checkNumberFoodItems = function () {
    var inputString = ($scope.name)
    if(inputString == ""){
      formatDisplayMsg("Please enter data first", "red")
      return
    }
    // parse input string per ',' as delimiter
    var inputArray = inputString.split(",")

    var blanksFound = 0
    // trim whitespace from each word
    for(var i = 0; i < inputArray.length; i++){
      inputArray[i] = inputArray[i].trim()
      // check if element between commas is blank space
      if(inputArray[i] == "")
        blanksFound++
    }

    var elementsNotBlank = inputArray.length - blanksFound
    if(elementsNotBlank == 0){
      formatDisplayMsg("Please enter data first", "red")
      return
    }

    if(elementsNotBlank < 4)
      formatDisplayMsg("Enjoy!", "green")
    else formatDisplayMsg("Too much!", "green")

  };


  function formatDisplayMsg(string, color) {
    $scope.displayString = string
    $scope.fontColor = color
    $scope.inputBorderColor = color
  }

};


})();
