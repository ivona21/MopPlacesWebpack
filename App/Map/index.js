module.exports = function(app){
    require('./mapService')(app);
    require('./mapController')(app);
    require('./mapDirective')(app);
};