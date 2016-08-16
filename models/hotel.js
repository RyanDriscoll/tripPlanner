var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {
    logging: false
});

var Hotel = db.define('hotel', schema, config);

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

Hotel.belongsTo(Place);

module.exports.Hotel = Hotel;
