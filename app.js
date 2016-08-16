var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var routes = require('./routes');
var models = require('./models');
var Place = models.Place;

app.use('/', morgan('dev'));
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });
app.use(express.static('./public'));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/', routes);

Place.sync( {
    force: true
})
.then(function() {
    app.listen(3000, function() {
        console.log('listening on port 3000!');
    })
})
.catch(function(err) {
    throw err;
});


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render(
    // ... fill in this part
  );
});


