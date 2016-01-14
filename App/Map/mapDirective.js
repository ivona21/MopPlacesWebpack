module.exports = function(app){
    app.directive('mapDirective', function(){
        return {
            template: require('./map.html'),
            controller: 'mapController',
            controllerAs: 'mapCtrl'
        }
    })
};