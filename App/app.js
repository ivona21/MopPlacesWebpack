var angular = require('angular');
var app = angular.module('MopPlaces', []);
require('./services')(app);
require('./controllers')(app);
require('./filters')(app);
require('./cardDirective')(app);
require('./contentDirective')(app);
require('./Map')(app);
//require('bootstrap-webpack');
require('../Style/bootstrap.css');
require('../Style/style.css');


