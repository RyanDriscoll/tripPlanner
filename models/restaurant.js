var Sequelize = require('sequelize');
var db = require('./db');
var Place = require('./place').Place;



var schema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuisine: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.INTEGER,
    }
};

var config = {};


var Restaurant = db.define('restaurant', schema, config);
Restaurant.belongsTo(Place);


module.exports.Restaurant = Restaurant;
