module.exports = function (app) {
    app.filter('sortByCategory', function (mapService) {
        var markers = mapService.markers;
        return function (places, currentCategory) {
            var match = [];
            if (mapService.mapInitialized) {
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setVisible(false);
                }
                for (var i = 0; i < places.length; i++) {
                    if (places[i].Category == currentCategory) {
                        match.push(places[i]);
                        for (var j = 0; j < markers.length; j++) {
                            if (markers[j].getTitle() == match[match.length - 1].Name)
                                markers[j].setVisible(true);
                        }
                    }
                }
            }
            return match;
        }
    });
};