var Sequelize = require('sequelize');
var db = require('./db');
var Place = require('./place').Place;



var schema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age_range: {
        type: Sequelize.STRING,
    }
};

var config = {};

var Activity = db.define('activity', schema, config);


Activity.belongsTo(Place);

module.exports.Activity = Activity;
