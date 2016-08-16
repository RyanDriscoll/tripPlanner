var Sequelize = require('sequelize');
var db = require('./db');

var schema = {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
    }
};

var config = {};

var Place = db.define('place', schema, config);


module.exports.Place = Place;
