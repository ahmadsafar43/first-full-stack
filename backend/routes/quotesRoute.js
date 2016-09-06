var express = require('express');
var mongoose = require('mongoose');
var Quote = require('../models/quoteSchema');

var quoteRoute = express.Router();

quoteRoute.route("/")
    .get(function (req, res) {

        var query = {};
        if (req.query.author) {
            query.author = req.query.author;
        }
        
//    Quote.find(query, function(err, quotes) {
//        
//    })
    
//        if (req.query.author) {
//            console.log(req.query)
//            Quote.find ({
//                author: req.query.author
//            }, function (err, searchedAuthorQuotes) {
//                if (err) {
//                    res.status(500).send(err);
//                } else {
//                    res.send(searchedAuthorQuotes);
//                }
//            })
//
//        }
        Quote.find(query, function (err, quotes) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(quotes);
            }
        })

    })
    .post(function (req, res) {
        var newQuote = new Quote(req.body);
        newQuote.save(function (err, savedQuote) {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send(savedQuote)
            }
        })
    })
quoteRoute.route("/:id")
    .delete(function (req, res) {
        var quoteID = req.params.id;
        Quote.findOneAndRemove({
            _id: quoteID
        }, function (err, deletedQuote) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(deletedQuote);
            }
        })
    })

.put(function (req, res) {
        var values = req.body;
    console.log("hi")
        Quote.findOneAndUpdate({_id: req.params.id}, values, {new: true}, function (err, updatedVote) {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send(updatedVote)
            }
        });
    });


module.exports = quoteRoute;