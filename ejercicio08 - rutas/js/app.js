var app = angular.module('angularApp',['ngRoute', 'ngSanitize']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

    this.$onInit = function(){

        console.log('mainCtrl onInit()');

        $scope.alerta = {
            'texto': '<strong>Lorem</strong> <hr> Ipsum',
            'clase': 'info'
        }

        // Para saber si el servivio REST está levantado.
        let url = 'http://localhost:3000';
        $http.get(url)
            .then(function (result) {
                console.trace('Servicio REST funcionando. %o', result);
                $scope.alerta = {
                    'texto': '<strong>¡Perfecto!</strong> Servicio REST funcionando correctamentre.',
                    'clase': 'info'
                }
            }).catch(function (response) {
                console.trace('Servicio REST fallando. %o', response);
                $scope.alerta = {
                    'texto': '<strong>¡Atención!</strong> Servicio REST está parado.',
                    'clase': 'danger'
                }
            
            });
        


    }; // onInit

    









}]);
