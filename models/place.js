var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {
    logging: false
});

var Place = db.define('place', schema, config);

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

module.exports.Place = Place;
