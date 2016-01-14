module.exports = function (app) {
    app.controller('controller', function (service) {
        var ctrl = this;
        ctrl.service = service;
        ctrl.places = service.data;
        ctrl.category = "Food";
        ctrl.changeCategory = function (category) {
            ctrl.category = category;
        };
    });
};