var app = angular.module("quotesApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/quotes", {
            templateUrl: "components/quotes/edit-quotes.html",
            controller: "AddQuoteController"
        })
        .when("/authors", {
            templateUrl: "components/authors/authors.html",
            controller: "AuthorsController"
        })
        .when("/pictures", {
            templateUrl: "components/pictures/pictures.html",
            controller: "PicturesController"
        })
        .when("/topics", {
            templateUrl: "components/topics/topics.html",
            controller: "TopicsController"
        })
        .when("/lists", {
            templateUrl: "components/lists/lists.html",
            controller: "ListsController"
        })
        .when("/search", {
            templateUrl: "components/search/search.html",
            controller: "SearchController"
        })
        .otherwise({
            redirectTo: "/"
        })
});