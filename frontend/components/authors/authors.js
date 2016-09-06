var app = angular.module("quotesApp");



app.controller("AuthorsController", ["$scope", "HttpService", function ($scope, HttpService) {
    $scope.HttpService = HttpService;
    $scope.searchauthor = function (authorsearched) {
        HttpService.queryQuotes(authorsearched);
        //                    .then (function (data) {
        //                    quotesList = data;
        //                    console.log(data);
        //
        //                })

    }
    $scope.upvote = function (Quote, index) {
        HttpService.updatePost(Quote, index, null, "Upvote")
    };
    
    HttpService.getQuotes();
}]);