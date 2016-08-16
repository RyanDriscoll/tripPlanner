var Sequelize = require('sequelize');
var db = require('./db');
var Place = require('./place').Place;




var schema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.INTEGER,
    },
    amenities: {
        type: Sequelize.STRING,
    }
};

var config = {};

var Hotel = db.define('hotel', schema, config);


Hotel.belongsTo(Place);

module.exports.Hotel = Hotel;
