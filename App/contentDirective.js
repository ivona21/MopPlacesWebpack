module.exports = function (app) {
    app.directive('contentDirective', function () {
        return {
            template: require('./content.html'),
            controller: 'controller',
            controllerAs: 'ctrl'
        }
    });
};