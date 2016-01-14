module.exports = function (app) {
    app.service('mapService', function (service) {
        var mapService = this;
        mapService.service = service;
        mapService.places = mapService.service.data;
        mapService.markers = [];
        mapService.mapInitialized = false;
        
        function initialize() {
            var mapOptions = {
                center: new google.maps.LatLng(43.854305, 18.402357),
                zoom: 13,
                disableDefaultUI: false
            };
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);
            mapService.mapInitialized = true;

            //initializing markers with lat, lng and title of data items from service
            for (var i = 0; i < mapService.places.length; i++) {
                mapService.markers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(mapService.places[i].Latitude, mapService.places[i].Longitude),
                    map: map,
                    title: mapService.places[i].Name
                });
                mapService.markers[i].setVisible(false);
            }
        }
        mapService.initialize = initialize;
    });
};