(function () {

    var app = angular.module('ejemplosApp', []);

    app.controller('mainCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {

        $scope.profesores = [];
        $scope.ocultar = false;

        // Petición hhtpRequest mediante Ajax. Es ASÍNCRONA.

        //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
        
        console.debug('Llamada asíncrona.');

        $timeout( function(){

            $http.get('json/profesores.json')
            .success(function (data) {
                console.trace('response OK %o', data);
                $scope.ocultar = true;
                $scope.profesores = data.profesores;
            });

        }, 3000);

        console.debug('Seguimos ejecutando otras sentencias.');

    }]);

})();