module.exports = function (app) {
    app.controller('mapController', function (mapService) {
        var ctrl = this;
        ctrl.mapService = mapService;
        var GoogleMapsLoader = require('google-maps');
        ctrl.domLoaded = function () {
            GoogleMapsLoader.load(function (google) {
                google.maps.event.addDomListener(window, "load", ctrl.mapService.initialize());
                document.getElementById('firstButton').click();
            });
        }();
    });
};