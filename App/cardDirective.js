module.exports = function (app) {
    app.directive('cardDirective', function () {
        return {
            template: require('./card.html'),
            controller: 'controller',
            controllerAs: 'ctrl'
        }
    });
};