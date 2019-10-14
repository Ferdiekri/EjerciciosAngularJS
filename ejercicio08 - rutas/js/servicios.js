var app = angular.module('angularApp.servicios', []);

app.factory('Frutas', ['$http','$q', function($http,$q){
    
    var self = [
        {
            "nombre": "Manzana",
            "precio": 7,
            "imagen": "manzana.png",
            "color": "rojo",
            "color_code": "#ff0000"
        }
    ];

    return self
}]);