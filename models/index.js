var Place = require('./place').Place;
var Hotel = require('./hotel').Hotel;
var Activity = require('./activity').Activity;
var Restaurant = require('./restaurant').Restaurant;

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
    Place: Place,
    Hotel: Hotel,
    Activity: Activity,
    Restaurant: Restaurant
};
