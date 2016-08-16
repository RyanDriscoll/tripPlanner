var express = require('express');
var Promise = require('bluebird');
var Hotel = require('../models').Hotel;
var Activity = require('../models').Activity;
var Restaurant = require('../models').Restaurant;
var router = express.Router();


router.get('/', function(req, res, next) {
    // var promArray = [Hotel.findAll(), Restaurant.findAll(), Activity.findAll()];
    // Promise.all(promArray)
    var allHotels, allActivities, allRestaurants;
    Hotel.findAll()
    .then(function (result) {
        allHotels = result;
        return Activity.findAll();
    })
    .then(function (result) {
        allActivities = result;
        return Restaurant.findAll();
    })
    .then(function (result) {
        allRestaurants = result;
    })
    .then(function() {
        res.render('index', {
        hotels: allHotels,
        restaurants: allRestaurants,
        activities: allActivities,
        });
    })
    .catch(next);
});



module.exports = router;
