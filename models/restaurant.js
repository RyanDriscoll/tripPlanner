var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {
    logging: false
});

var Restaurant = db.define('restaurant', schema, config);

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

Restaurant.belongsTo(Place);

module.exports.Restaurant = Restaurant;
