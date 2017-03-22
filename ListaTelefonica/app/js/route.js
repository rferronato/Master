(function () {
    'use strict';

    angular
        .module('ListaTelefonica')
        .config(Config);

    Config.$inject = ['$routeProvider'];

    function Config($routeProvider) {

        $routeProvider
            .when('/', {
                template: 'carregou',
            })
            .when('/teste', {
                templateUrl: 'views/teste.html',
            });        
    }
})();