var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {
    logging: false
});

var Activity = db.define('activity', schema, config);

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

module.exports.Activity = Activity;
