var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {
    logging: false
});

db.sync().then(function () {
    console.log("hi")
});

module.exports = db;
