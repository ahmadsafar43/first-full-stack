var app = angular.module("quotesApp");

app.service('HttpService', function ($http) {
    var self = this;
    this.quotesList = [];

    this.getQuotes = function () {
        return $http.get("/quotes").then(function (response) {
            self.quotesList = response.data;
            return response.data;
        });
    };

    this.queryQuotes = function (searchItem) {

        console.log("hello");
        return $http.get("/quotes?author=" + searchItem).then(function (response) {
            self.quotesList = response.data;
            return response.data;
        });
    };

    this.postQuote = function (newQuote) {
        //        console.log(newQuote);
        return $http.post("/quotes/", newQuote).then(function (response) {
            return response.data;
        });
    };

    this.deleteQuote = function (Quote, index) {
        return $http.delete("/quotes/" + Quote._id).then(function (response) {
            self.quotesList.splice(index, 1);
        });
    };

    this.updatePost = function (Quote, index, comment, doWhat) {
        if (doWhat === "Upvote") {
            Quote.loveNumber += 1;
        } else if (doWhat === "comment") {
            Quote.comments.push(comment)
        }

        return $http.put("/quotes/" + Quote._id, Quote)
    }
});