var app = angular.module("quotesApp");



app.controller("AddQuoteController", ["$scope", "HttpService", function ($scope, HttpService) {
    $scope.newQuote = {};
    $scope.HttpService = HttpService;
//    $scope.quotesList = [];
//    $scope.test = "Hello!";
    $scope.addQuote = function () {

        HttpService.postQuote($scope.newQuote).then(function (data) {
            $scope.Quote = data;
             HttpService.getQuotes();
//            $scope.getQuotes();
            console.log($scope.Quote);
        })
    },
          $scope.deleteQuote = function (Quote, index) {
        HttpService.deleteQuote(Quote, index);
            
        }
      $scope.upvote = function (Quote, index) {
        HttpService.updatePost(Quote, index, null, "Upvote")
    };
    
    HttpService.getQuotes();
}]);