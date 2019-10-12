/* JavaScript para nuestra App */

var app = angular.module('componentesApp', []);


app.controller(
    'notasController', // Nombre del controlador
    function ($scope) { // Programación del controlador

        $scope.notas = {
            "pepe": [{
                    "asignatura": "HTML",
                    "nota": 5
                },
                {
                    "asignatura": "CSS",
                    "nota": 8
                },
                {
                    "asignatura": "JS",
                    "nota": 7
                },
                {
                    "asignatura": "AngularJs",
                    "nota": 3
                }
            ]};
    });